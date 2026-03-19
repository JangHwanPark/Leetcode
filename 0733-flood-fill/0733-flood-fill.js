/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    console.log(image)
    const dx=[-1,1,0,0];
    const dy=[0,0,-1,1];
    const r=image.length;
    const c=image[0].length;
    const q=[[sr,sc]]
    const org=image[sr][sc];
    if(org===color)return image;
    image[sr][sc]=color;
    while(q.length>0){
        const [x,y]=q.shift();
        for(let i=0;i<4;i++){
            const nx=x+dx[i];
            const ny=y+dy[i];
            if(nx<0||ny<0||nx>=r||ny>=c)continue;
            if(image[nx][ny]!==org)continue;
            image[nx][ny]=color;
            q.push([nx,ny]);
        }
    }
    return image;
};