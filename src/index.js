const QRCode = require('qrcode');

/**
 * Generates a QR code for a given wallet address and displays it in a specified HTML element.
 * @param {string} walletAddress - The wallet address to be encoded in the QR code.
 * @param {string} elementId - The ID of the HTML element where the QR code will be displayed.
 */
function generateQRCode(walletAddress, elementId) {
    if (!walletAddress.trim()) {
        alert('Please enter a wallet address');
        return;
    }

    const targetElement = document.getElementById(elementId);

    if (!targetElement) {
        console.error(`Element with ID ${elementId} not found`);
        return;
    }

    targetElement.innerHTML = '';

    QRCode.toCanvas(targetElement, walletAddress, function (error) {
        if (error) {
            console.error('Error generating QR code:', error);
            alert('Failed to generate QR code');
        } else {
            console.log('QR code generated successfully');
        }
    });
}

module.exports = {
    generateQRCode
};
