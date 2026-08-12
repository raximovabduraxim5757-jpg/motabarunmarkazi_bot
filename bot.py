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
BOT_TOKEN = os.environ.get('BOT_TOKEN', 'YOUR_BOT_TOKEN_HERE')
# DIQQAT: Bu yerga Netlify/Vercel saytingizning TO'LIQ manzilini yozing!
WEB_APP_URL = os.environ.get('WEB_APP_URL', 'https://your-site.netlify.app')

# ====== Telegram Bot funksiyalari ======
async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """Start komandasi"""
    user = update.effective_user
    first_name = user.first_name if user.first_name else "aziz"
    
    # Tugmalar
    keyboard = [
        # 🔥 BU YERDA "🛒 Zakaz berish" o'rniga "🌾 Do'konga kirish" yozildi
        [InlineKeyboardButton("🌾 Do'konga kirish", web_app={"url": WEB_APP_URL})],
        [InlineKeyboardButton("📞 Aloqa", url="https://t.me/unbaza_dostavka")],
        [InlineKeyboardButton("📢 Kanal", url="https://t.me/motabar_andijon")]
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)
    
    await update.message.reply_text(
        f"👋 Assalomu alaykum, {first_name}!\n\n"
        "🌾 Mo'tabar Un Markazi - Andijon viloyatida joylashgan, eng sifatli va arzon un mahsulotlarini yetkazib beruvchi markaz.\n\n"
        "⬇️ Quyidagi tugmani bosib, do'konimizga xush kelibsiz!",
        reply_markup=reply_markup
    )

async def help_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """Yordam komandasi"""
    await update.message.reply_text(
        "🆘 Yordam:\n\n"
        "1. /start - Botni qayta ishga tushirish\n"
        "2. '🌾 Do'konga kirish' tugmasi - Mahsulotlarni ko'rish va zakaz berish\n"
        "3. '📞 Aloqa' tugmasi - Operator bilan bog'lanish\n"
        "4. '📢 Kanal' tugmasi - Bizning kanalga obuna bo'lish"
    )

async def about(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """Biz haqimizda"""
    await update.message.reply_text(
        "🌾 Mo'tabar Un Markazi\n\n"
        "📍 Manzil: Andijon viloyati, Jaxon Bozori\n"
        "📅 Tashkil etilgan: 1998-yil\n\n"
        "💪 25+ yillik tajriba\n"
        "✅ Sifat kafolati\n"
        "🚚 Tez yetkazib berish\n\n"
        "🏷️ Bizning mahsulotlar:\n"
        "• MO'TABAR (1-nav, 2-nav, Premium)\n"
        "• QADIMGI-NAV\n"
        "• ADMIRAL\n"
        "• CHESTER\n"
        "• CORNER\n"
        "• DANI-NAN\n"
        "• ORDABASY\n"
        "• DIKHAN-BABA\n"
        "• DOBRIY MELNIK\n"
        "• KEREMET\n"
        "• ELIT KOSTANAY\n"
        "• SALAMAT\n"
        "• TROYKA\n"
        "• UNO\n"
        "• YARKO\n"
        "• ZO'R"
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
    application.add_handler(CommandHandler("about", about))
    
    logger.info("🚀 Bot va Flask server ishga tushdi...")
    application.run_polling(allowed_updates=Update.ALL_TYPES)

if __name__ == '__main__':
    main()
