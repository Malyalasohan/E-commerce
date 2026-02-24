from flask import Flask, render_template, send_from_directory, jsonify
import os

app = Flask(
    __name__,
    template_folder='website/templates',  # HTML files
    static_folder='website/static'        # CSS, JS, images, videos
)

# 🏠 Home Page
@app.route('/')
def home():
    return render_template('home.html')

# 🛍️ Shop Page
@app.route('/shop')
def shop():
    return render_template('shop.html')

# ℹ️ About Page
@app.route('/about')
def about():
    return render_template('about.html')

# 🛒 Cart Page
@app.route('/cart')
def cart():
    return render_template('cart.html')

# 🔒 Signup Page
@app.route('/signup')
def signup():
    return render_template('signup.html')

# 💬 Feedback Page
@app.route('/feedback')
def feedback():
    return render_template('feedback.html')

# 📸 Serve Images
@app.route('/static/images/<filename>')
def serve_image(filename):
    return send_from_directory(os.path.join(app.static_folder, 'images'), filename)

# 🎥 Serve Videos
@app.route('/static/videos/<filename>')
def serve_video(filename):
    return send_from_directory(os.path.join(app.static_folder, 'videos'), filename)

# 💰 Dynamic Pricing API (Example)
@app.route('/get_dynamic_prices')
def get_dynamic_prices():
    # Example: Prices updated dynamically based on some logic
    prices = [89, 119, 69]  # Replace with actual logic (ML, demand, etc.)
    return jsonify(prices)

# 🚀 Run Flask Server
if __name__ == '__main__':
    app.run(debug=True)  