function select(path, nodes) {
    let ans = [];
    let nodearr = [];
    nodes.forEach((node)=>{
        let t = node
        nodearr.push(t.split(' '));
    });
    
    let patharr = [];
    patharr = path.split('/');
    
    let targetnodes = [];
    let startnode = patharr[0];
    
    function findnode(node2find, targetnode){
        nodearr.forEach((node)=>{
            if(node.includes(node2find)){
                targetnode.push(node);
            }
        });
    }
    
    findnode(startnode, targetnodes);
    if(targetnodes[0][3]!='NONE'){
        return [];
    }
    if(patharr.length==1){
        targetnodes.forEach(node=>
            {ans.push(node[2])}
        )
    }
    patharr.splice(0,1);

    
    function checknode(node, path, targetnode){
        let nodename = targetnode[0];
        let targetnode0 = [];
        targetnode.splice(0,1);
        findnode(patharr[0], targetnode0);
        console.log(nodename);
        targetnode0 = targetnode0.filter(node=>node[3]==nodename[0]);
        console.log(targetnode0);
        if(patharr.length==1){
            targetnode0.forEach(node=>
                {ans.push(node[2])}
            )
        }else{
            patharr.splice(0, 1);
            let p0 = patharr;
            while(targetnode0.length>0){
                checknode(node, p0,targetnode0);
            }
        }

    }
    
    checknode(nodearr[0], patharr, targetnodes);
    
    
    
    return ans;
}

console.log(select('a/c', [
    'A0 a 0 NONE',
    'B1 b 1 A0',
    'C2 c 2 B1',
    'C3 c 3 B1',
    'B4 b 5 A0',
    'C5 c 6 B4',
    'C6 c 7 B4'
  ]));
