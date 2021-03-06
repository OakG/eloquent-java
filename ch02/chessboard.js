/* Write a program that creates a string that represents an 8×8 grid, using
newline characters to separate lines. At each position of the grid there is
either a space or a “#” character. The characters should form a chess board.

Passing this string to console.log should show something like this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
*/

board = "";
size = 8;
for (var n = 1; n <= size; n++) {
    for (var i = 1; i <= size; i++) {
        if ((n+i)%2 === 0) {
            stamp = " ";
            board =+ stamp;
        } else {
            stamp = "#";
            board =+ stamp;
        }
        if (i === size) {
            stamp = "\n";
            board =+ stamp;
        }
    }
}
