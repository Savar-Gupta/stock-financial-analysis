document.addEventListener('DOMContentLoaded', function() {
    // Assuming you have an HTML element with an id="response"
    const responseElement = document.getElementById('response');
    const stockForm = document.getElementById('stockForm');

    stockForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Get the value entered in the stock ticker input
        const stockTickerInput = document.getElementById('stockTicker');
        const stockTicker = stockTickerInput.value.toUpperCase();

        // Display a message indicating that the analysis is being fetched
        responseElement.innerHTML = `Fetching analysis for ${stockTicker}...`;

        // Fetch stock analysis
        fetch(`/api/stock-analysis?ticker=${stockTicker}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                // Update the UI with the analysis results
                responseElement.innerHTML = `Stock Analysis for ${stockTicker}: Indicator - ${data.indicator}, Confidence - ${data.confidence}`;
            })
            .catch(error => {
                console.error('Error fetching stock analysis:', error);
                responseElement.innerHTML = `Error fetching analysis for ${stockTicker}. Please try again.`;
            });
    });
});
