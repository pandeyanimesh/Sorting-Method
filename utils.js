


const toggleButtons = (disable, ...buttonIds) => {
    const buttonMap = {
        'bubble': bubbleSort,
        'selection': SelectionSort,
        'insertion': InsertionSort,
        'quick': QuickSort,
        'merge': MergeSort,
        'array': arrayNew
    };

    // If no specific buttons provided, toggle all
    if (buttonIds.length === 0) {
        Object.values(buttonMap).forEach(button => button.disabled = disable);
        return;
    }

    // Toggle only specified buttons
    buttonIds.forEach(id => {
        if (buttonMap[id]) {
            buttonMap[id].disabled = disable;
        }
    });
}