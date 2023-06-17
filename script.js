const list = document.getElementById('infi-list');
const listItemHeight = 50; // Adjust this value based on your list item's height
let totalItems = 10; // Initial number of list items
let visibleItems = 10; // Number of items initially visible

// Function to generate list items
function generateListItems(start, end) {
  for (let i = start; i < end; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = `List Item ${i + 1}`;
    list.appendChild(listItem);
  }
}

// Function to check if user has reached the end of the list
function isEndOfList() {
  const scrollTop = list.scrollTop;
  const scrollHeight = list.scrollHeight;
  const clientHeight = list.clientHeight;
  return Math.ceil(scrollTop + clientHeight) >= scrollHeight;
}

// Function to handle scrolling event
function handleScroll() {
  if (isEndOfList()) {
    const start = visibleItems;
    visibleItems += 10; // Number of items to add at each scroll
    const end = Math.min(visibleItems, totalItems);

    generateListItems(start, end);
  }
}

// Initial population of list items
generateListItems(0, visibleItems);

// Function to simulate adding more items dynamically
function simulateDynamicItemAddition() {
  totalItems += 10;
}

// Event listener for scroll event
list.addEventListener('scroll', handleScroll);

// Simulate dynamic item addition after a delay
setTimeout(simulateDynamicItemAddition, 3000);
