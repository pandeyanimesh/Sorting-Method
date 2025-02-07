const QuickSort = document.getElementById("Quick-Sort");

QuickSort.addEventListener("click", async function() {
    toggleButtons(true, 'bubble','selection', 'insertion','merge', 'array');

    await quickSort(0, arr.length - 1);

    // Color all bars green after completion
    for (let i = 0; i < arr.length; i++) {
        const bar = document.getElementsByClassName("bar" + i)[0];
        bar.style.border = "6px solid #5F939A";
        bar.style.background = "#5F939A";
    }

    toggleButtons(false);
});

async function quickSort(low, high) {
    if (low < high) {
        const pi = await partition(low, high);
        
        // Color the pivot in its final position
        const pivotBar = document.getElementsByClassName("bar" + pi)[0];
        pivotBar.style.border = "6px solid #5F939A";
        pivotBar.style.background = "#5F939A";
        
        await quickSort(low, pi - 1);
        await quickSort(pi + 1, high);
    }
    else if (low === high) {
        // Color single elements
        const bar = document.getElementsByClassName("bar" + low)[0];
        bar.style.border = "6px solid #5F939A";
        bar.style.background = "#5F939A";
    }
}

async function partition(low, high) {
    // Color pivot
    const pivotBar = document.getElementsByClassName("bar" + high)[0];
    pivotBar.style.border = "6px solid #FF6B6B";
    pivotBar.style.background = "#FF6B6B";
    
    const pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        const bar1 = document.getElementsByClassName("bar" + j)[0];
        bar1.style.border = "6px solid red";
        bar1.style.background = "red";
        await timer(t * 10);

        if (arr[j] < pivot) {
            i++;
            const bar2 = document.getElementsByClassName("bar" + i)[0];
            bar2.style.border = "6px solid red";
            bar2.style.background = "red";
            
            swap(bar1, bar2);
            [arr[i], arr[j]] = [arr[j], arr[i]];
            
            // Reset color after swap
            bar2.style.border = "6px solid #F3F4ED";
            bar2.style.background = "#F3F4ED";
        }
        bar1.style.border = "6px solid #F3F4ED";
        bar1.style.background = "#F3F4ED";
    }

    const bar1 = document.getElementsByClassName("bar" + (i + 1))[0];
    swap(bar1, pivotBar);
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

    return i + 1;
}

function swap(e1, e2) {
    const x = window.getComputedStyle(e1);
    const y = window.getComputedStyle(e2);
    const h1 = x.getPropertyValue("height");
    const h2 = y.getPropertyValue("height");
    e1.style.height = h2;
    e2.style.height = h1;
}