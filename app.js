let friends = ['Russ', 'Mindy', 'David', 'Nikki', 'Hunter'];

loopOuter:
for (let i = 0; i < friends.length; i++) {
    const name = friends[i];
    // let line = 99;
    for (let line = 99; line > 0; line--) {
        if (line >= 2) {
            console.log(line + ' lines of code in the file, ' + line + ' lines of code; ' + name + ' strikes one out, clears it all out, ' + [line - 1] + ' lines of code in the file');
        } else {
            console.log('1 line of code in the file, 1 line of code; ' + name +' strikes one out, clears it all out, no more lines of code in the file!');
            continue loopOuter;
        }
    }
 }