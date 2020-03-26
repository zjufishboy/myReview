//DFS与BFS的区别
class node{
    constructor(val){
        this.val=val;
        this.left=null;
        this.right=null;
        return this
    }
    
}
function test(type){
    let node1=new node(1)
    let node2=new node(2)
    let node3=new node(3)
    let node4=new node(4)
    let node5=new node(5)
    let node6=new node(6)
    let node7=new node(7)
    let node8=new node(8)
    node1.left=node2
    node1.right=node3
    node2.left=node4
    node2.right=node5
    node3.left=node6
    node3.right=node7
    node7.left=node8 
    if(type=="dfs")dfs(node1)
    //可以看到dfs是优先去深层，最终能够找到每一个结果
    if(type=="bfs")bfs(node1)
    //显然bfs是优先对比本层数据，在一些场合需要寻找图这种复杂连接的最短路径的时候就可以保证最先找到对应节点的那个路径就是最短路径，这个算法在计算机网络求最短路径时也可以用到
    
}

function dfs(root){
    console.log(root.val)
    if(root.left!=null)dfs(root.left)
    if(root.right!=null)dfs(root.right)
    if(root.left==null&&root.left==null){
        console.log("leaf")
        return
    }
}
function bfs(root){
    let queue=[];
    queue.push(root);
    while(queue.length>0){
        // console.log(queue.map(node=>node.val))
        let node=queue.shift()
        console.log(node.val);
        if(node.left!=null)queue.push(node.left)
        if(node.right!=null)queue.push(node.right)
        if(node.left==null&&node.right==null){
            console.log("leaf")
        }
        
    }
}



test("bfs")