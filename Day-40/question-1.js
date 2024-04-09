// 2073. Time Needed to Buy Tickets


// There are n people in a line queuing to buy tickets, where the 0th person is at the front of the line and the (n - 1)th person is at the back of the line.

// You are given a 0-indexed integer array tickets of length n where the number of tickets that the ith person would like to buy is tickets[i].

// Each person takes exactly 1 second to buy a ticket. A person can only buy 1 ticket at a time and has to go back to the end of the line
// (which happens instantaneously) in order to buy more tickets. If a person does not have any tickets left to buy, the person will leave the line.

// Return the time taken for the person at position k (0-indexed) to finish buying tickets.

// Input: tickets = [2,3,2], k = 2
// Output: 6
// Explanation: 
// - In the first pass, everyone in the line buys a ticket and the line becomes [1, 2, 1].
// - In the second pass, everyone in the line buys a ticket and the line becomes [0, 1, 0].
// The person at position 2 has successfully bought 2 tickets and it took 3 + 3 = 6 seconds.


var timeRequiredToBuy = function(tickets, k) {
    let time = 0; 
    let kTickets = tickets[k]; 

    for (let i = 0; i < tickets.length; i++) {
        if (i <= k) {
            time += Math.min(tickets[i], kTickets);
        } else {
            time += Math.min(tickets[i], kTickets - 1);
        }
    }

    return time;
};