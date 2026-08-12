import os
import logging
import threading
from flask import Flask
from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup
from telegram.ext import Application, CommandHandler, ContextTypes

# ====== Logging sozlash ======
logging.basicConfig(
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    level=logging.INFO
)
logger = logging.getLogger(__name__)

# ====== MUHIM: TOKEN VA WEB APP URL ======
# Railway/Render da Environment Variables ga BOT_TOKEN va WEB_APP_URL qo'shganingizga ishonch hosil qiling!
BOT_TOKEN = os.environ.get('BOT_TOKEN', 'YOUR_BOT_TOKEN_HERE')
# DIQQAT: Bu yerga GitHub Pages (yoki Netlify/Vercel) saytingizning TO'LIQ manzilini yozing!
WEB_APP_URL = os.environ.get('WEB_APP_URL', 'https://your-site.netlify.app')

# ====== Telegram Bot funksiyalari ======
async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """Start komandasi"""
    user = update.effective_user
    first_name = user.first_name if user.first_name else "Hurmatli mijoz"
    
    # ✨ Pastdagi 3 ta tugma (Aloqa, Kanal) butunlay olib tashlandi.
    # Faqat bitta tugma: Do'konga kirish
    keyboard = [
        [InlineKeyboardButton("🌾 Do'konga kirish", web_app={"url": WEB_APP_URL})]
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)
    
    # ✨ Premium va do'stona matn
    welcome_text = (
        f"👋 Assalomu alaykum, {first_name}!\n\n"
        "🌾 **Mo'tabar Un Markazi** - Andijon viloyatining ishonchli va sifatli un mahsulotlari yetkazib beruvchisi.\n\n"
        "🛍️ Sizga eng yaxshi xizmatni taqdim etishdan mamnunmiz. Premium sifat, barakali dasturxon!\n\n"
        "⬇️ Quyidagi **【 Ochish 】** tugmasini bosib, do'konimizga tashrif buyuring.\n"
        "*(Telefon yoki kompyuteringizda qulay interfeysda xarid qiling!)*"
    )
    
    await update.message.reply_text(
        welcome_text,
        reply_markup=reply_markup,
        parse_mode='Markdown'  # Matnni chiroyli ko'rsatish uchun
    )

async def help_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """Yordam komandasi"""
    await update.message.reply_text(
        "🆘 **Yordam markazi:**\n\n"
        "1️⃣ /start - Botni qayta ishga tushirish\n"
        "2️⃣ **【 Ochish 】** tugmasi - Do'konimizga kirish va mahsulotlarni ko'rish\n\n"
        "💬 Savollar bo'lsa, do'kon ichidagi '📞 Aloqa' bo'limidan bizga murojaat qilishingiz mumkin."
    )

# ====== Flask Server (Platforma portni ko'rishi uchun) ======
flask_app = Flask(__name__)

@flask_app.route('/')
def home():
    return "Bot is running!"

def run_web_server():
    port = int(os.environ.get('PORT', 10000))
    flask_app.run(host='0.0.0.0', port=port, debug=False, use_reloader=False)

# ====== Asosiy ishga tushirish qismi ======
def main():
    flask_thread = threading.Thread(target=run_web_server)
    flask_thread.daemon = True
    flask_thread.start()
    
    application = Application.builder().token(BOT_TOKEN).build()
    application.add_handler(CommandHandler("start", start))
    application.add_handler(CommandHandler("help", help_command))
    
    logger.info("🚀 Bot va Flask server ishga tushdi...")
    application.run_polling(allowed_updates=Update.ALL_TYPES)

if __name__ == '__main__':
    main()
