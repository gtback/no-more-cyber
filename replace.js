// http://stackoverflow.com/questions/10114212/
var nodes = document.getElementsByTagName("*");
for(var i = 0; i < nodes.length; i++) {
    var subNodes = nodes[i].childNodes;
    for (var j = 0; j < subNodes.length; j++) {
        var node = subNodes[j];
        if (node.nodeType === 3) {
            if (node.data) {
                node.data = node.data.replace(/cyber/g, "ferret");
                node.data = node.data.replace(/Cyber/g, "Ferret");
            }
        }
    }
}
