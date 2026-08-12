async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """Start komandasi"""
    user = update.effective_user
    first_name = user.first_name if user.first_name else "Hurmatli mijoz"
    
    # Faqat bitta tugma
    keyboard = [
        [InlineKeyboardButton("🌾 Do'konga kirish", web_app={"url": WEB_APP_URL})]
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)
    
    # ✨ Matnni biroz o'zgartirdim (Telegram yangi xabar deb tushunishi uchun)
    welcome_text = (
        f"👋 Xush kelibsiz, {first_name}!\n\n"
        "🌾 **Mo'tabar Un Markazi** - Andijon viloyatining ishonchli va sifatli un mahsulotlari yetkazib beruvchisi.\n\n"
        "🛍️ Sizga eng yaxshi xizmatni taqdim etishdan mamnunmiz.\n\n"
        "⬇️ Quyidagi **【 Ochish 】** tugmasini bosing va premium do'konimizga tashrif buyuring.\n"
        "*(Web App orqali qulay xarid qiling!)*"
    )
    
    await update.message.reply_text(
        welcome_text,
        reply_markup=reply_markup,
        parse_mode='Markdown'
    )
