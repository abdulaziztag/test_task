function queueTime(customers, cashiers) {
    const cashiersQueue = new Array(cashiers).fill(0)
    customers.forEach(element => {
        const leastVal = cashiersQueue.indexOf(Math.min(...cashiersQueue))
        cashiersQueue[leastVal] += element
    });
    return Math.max(...cashiersQueue)
}