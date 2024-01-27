from flask import Flask, jsonify, request, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/stock-analysis', methods=['GET', 'POST'])
def stock_analysis():
    if request.method == 'POST':
        # Get the stock ticker from the form submission
        stock_ticker = request.form.get('stockTicker', '').upper()

        # Perform stock analysis (dummy result for now)
        result = {'indicator': 'Buy', 'confidence': 0.8}
        return jsonify(result)

    # Return a dummy result for a GET request
    result = {'message': 'Submit the form to get stock analysis results.'}
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)
