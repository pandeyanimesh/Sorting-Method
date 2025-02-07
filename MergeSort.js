const MergeSort = document.getElementById("Merge-Sort");

MergeSort.addEventListener("click", async function() {
    toggleButtons(true, 'bubble','selection', 'insertion','quick', 'array');
    await mergeSort(0, arr.length - 1);

    // Color all bars green after completion
    for (let i = 0; i < arr.length; i++) {
        const bar = document.getElementsByClassName("bar" + i)[0];
        bar.style.border = "6px solid #5F939A";
        bar.style.background = "#5F939A";
    }

    toggleButtons(false);
});

async function mergeSort(l, r) {
    if (l >= r) return;
    
    const m = Math.floor((l + r) / 2);
    
    // Color the current section being processed
    for(let i = l; i <= r; i++) {
        const bar = document.getElementsByClassName("bar" + i)[0];
        bar.style.border = "6px solid #FF6B6B";
        bar.style.background = "#FF6B6B";
    }
    await timer(t * 10);
    
    await mergeSort(l, m);
    await mergeSort(m + 1, r);
    await merge(l, m, r);
}

async function merge(l, m, r) {
    const temp = [];
    let i = l, j = m + 1;

    while (i <= m && j <= r) {
        // Color bars being compared
        const bar1 = document.getElementsByClassName("bar" + i)[0];
        const bar2 = document.getElementsByClassName("bar" + j)[0];
        
        bar1.style.border = "6px solid red";
        bar1.style.background = "red";
        bar2.style.border = "6px solid red";
        bar2.style.background = "red";
        
        await timer(t * 10);

        if (arr[i] <= arr[j]) {
            temp.push(arr[i++]);
        } else {
            temp.push(arr[j++]);
        }
        
        // Reset colors
        bar1.style.border = "6px solid #F3F4ED";
        bar1.style.background = "#F3F4ED";
        bar2.style.border = "6px solid #F3F4ED";
        bar2.style.background = "#F3F4ED";
    }

    while (i <= m) temp.push(arr[i++]);
    while (j <= r) temp.push(arr[j++]);

    for (let k = 0; k < temp.length; k++) {
        arr[l + k] = temp[k];
        const bar = document.getElementsByClassName("bar" + (l + k))[0];
        bar.style.height = (temp[k] + 1) * 5 + "px";
        
        // Show merged result
        bar.style.border = "6px solid #5F939A";
        bar.style.background = "#5F939A";
        await timer(t * 10);
    }
}