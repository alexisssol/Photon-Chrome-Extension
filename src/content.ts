// Function to create and style the button
function createStyledButton(): HTMLButtonElement {
    const button = document.createElement("button");
    button.className = "show-creator-button";
    button.textContent = "🧷 Show Funding";
    button.setAttribute("data-tooltip-id", "tooltip-memescopecard");
    button.setAttribute("data-tooltip-content", "Show Funding");

    Object.assign(button.style, {
        padding: "0",
        border: "0",
        color: "rgb(181, 183, 218)",
        backgroundColor: "transparent",
        cursor: "pointer",
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
        fontSize: "11px"
    });

    button.addEventListener('click', async (event) => {
        event.stopPropagation();
        event.preventDefault();

        // Show loading spinner
        button.innerHTML = '<div class="loading-spinner"></div>';

        // Fire the click event of the span element
        const spanElement = button.parentElement?.parentElement?.querySelector('div.O1Yy1xXe2uVeuSuj862s.js-copy-to-clipboard') as HTMLElement;

        if (spanElement) {
            try {
                const mintAddress = spanElement.getAttribute('data-address');

                chrome.runtime.sendMessage({ action: 'getCreatorFundingWalletAndBalance', data: { mintAddress } }, (response) => {
                    if (chrome.runtime.lastError) {
                        console.error(chrome.runtime.lastError);
                    } else if (response) {
                        if (response.success) {
                            button.innerHTML = `
                                <div style="text-align: left; color: #b1bc8d;">${response.funding}</div>
                                <div style="text-align: left"><span style="color: #5eeae1">${Math.trunc(response.solBalance)} (SOL)</span> | <span style="color: #c8a27e;">${response.tokenBalance} Tokens ($${Math.floor(response.tokenAmount)})</span></div>
                            `;
                        } else {
                            button.innerHTML = `
                                <div class="error-message">
                                    <span>Error: ${response.error}</span>
                                </div>
                            `;
                            setTimeout(() => {
                                button.innerHTML = "🧷 Show Funding";
                            }, 3000);
                        }
                    }
                });
            } catch (err) {
                button.innerHTML = "🧷 Show Funding";
            }
        } else {
            button.innerHTML = "🧷 Show Funding";
        }
    });

    return button;
}

function handleDivChanges(mutation: MutationRecord, observer: MutationObserver, divElement: Element): void {
    // console.log('Changed Div element:', (divElement.parentElement?.previousSibling as Element)?.querySelector('h2.G3nWYwyOTPi2QhQqDOSG')?.innerHTML);

    // Process only added nodes
    mutation.addedNodes.forEach(node => {
        if (node instanceof HTMLElement && node.matches('div.sBVBv2HePq7qYTpGDmRM.VTmpJ0jdbJuSJQ4HKGlN')) {
            const fragment = document.createDocumentFragment();
            const newDiv = document.createElement('div');
            newDiv.setAttribute("bis_skin_checked", "1");

            // Find the specific div under the <a> tag
            const targetDiv = node.querySelector('div.oii6JFeHBrPRAGAatOXP')?.parentElement;
            if (targetDiv && !targetDiv.querySelector('button.show-creator-button')) {
                newDiv.appendChild(createStyledButton());
                fragment.appendChild(newDiv);
                targetDiv.appendChild(fragment);
            }
        }
    });
}

// Function to create and start observing div elements with the specified class name
function observeDivElements(className: string): void {
    const divElements = document.querySelectorAll(`div.${className}`);

    divElements.forEach(divElement => {
        const observer = new MutationObserver((mutations, observer) => {
            mutations.forEach(mutation => handleDivChanges(mutation, observer, divElement));
        });

        observer.observe(divElement, { childList: true, subtree: true });
    });
}

// Create a MutationObserver to detect changes in the DOM
const observer = new MutationObserver((mutations: MutationRecord[], observer: MutationObserver) => {
    // Check if the specific element has been fully rendered
    const specificElement = document.querySelector('div.l-row.l-row-gap--s.u-flex-grow-full');
    if (specificElement) {
        observer.disconnect(); // Stop observing after the initial render
        observeDivElements('dbIzlq2D2W9wqE6dpwdZ');
    }
});

// Start observing the document for changes to find the specific element
observer.observe(document, { childList: true, subtree: true });

// Add styles for the loading spinner directly in JavaScript
const style = document.createElement('style');
style.innerHTML = `
.loading-spinner {
    border: 4px solid #252837;
    border-left-color: #419c9c;
    border-radius: 50%;
    width: 13px;
    height: 13px;
    animation: spin 1s linear infinite;
    display: inline-block;
    vertical-align: middle;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

.error-message {
    color: #dd4785;
    font-size: 11px;

}
`;

document.head.appendChild(style);
