console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}\\"`);
function html(strings, username, comment) {
    var str1 = strings[0];
    var str2 = strings[1];
    var escapeSequences = {
        "&": "&amp;",
        "'": "&apos;",
        '"': "&quot;",
        "<": "&lt;",
        ">": "&gt;",
    }
    username = username.replace(/\&/g, escapeSequences["&"]);
    username = username.replace(/\'/g, escapeSequences["'"]);
    username = username.replace(/\"/g, escapeSequences['"']);
    username = username.replace(/\</g, escapeSequences["<"]);
    username = username.replace(/\>/g, escapeSequences[">"]);

    comment = comment.replace(/\&/g, escapeSequences["&"]);
    comment = comment.replace(/\'/g, escapeSequences["'"]);
    comment = comment.replace(/\"/g, escapeSequences['"']);
    comment = comment.replace(/\</g, escapeSequences["<"]);
    comment = comment.replace(/\>/g, escapeSequences[">"]);


    return `${str1}${username}${str2}${comment}\"`;
}