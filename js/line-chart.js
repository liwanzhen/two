    var json={
                data:[{time:"2015-07-01",num:"120"},
                      {time:"2015-07-02",num:"180"},
                      {time:"2015-07-03",num:"230"},
                      {time:"2015-07-04",num:"340"},
                      {time:"2015-07-05",num:"640"},
                      {time:"2015-07-06",num:"750"},
                      {time:"2015-07-07",num:"590"},
                      {time:"2015-07-08",num:"600"},
                      {time:"2015-07-09",num:"600"},
                      {time:"2015-07-10",num:"700"}
                    ]
            }
            var canvas=document.getElementById("mycanvas");
            var width=750;
            var height=350;
            canvas.width=width;
            canvas.height=height;
            var ctx=canvas.getContext("2d");
            ctx.beginPath();
            var spaceX=width*0.1;
            var spaceY=height*0.1;
            if(spaceX<20)
            {
                spaceX=spaceY=20;
            }
            ctx.moveTo(spaceX,0.9*height);
            ctx.lineTo(width,0.9*height);
            ctx.lineTo(59/60*width,7/8*height);
            ctx.moveTo(width,0.9*height);
            ctx.lineTo(59/60*width,37/40*height);
            ctx.moveTo(spaceX,0.9*height);
            ctx.lineTo(spaceX,0);
            ctx.lineTo(1/12*width,1/40*height);
            ctx.moveTo(spaceX,0);
            ctx.lineTo(7/60*width,1/40*height);
            ctx.fillText("日期",19/20*width,0.95*height);
            ctx.fillText("人数",0.05*width,0.05*height);
            for(var i=1;i<11;i++)
            {
                ctx.moveTo(spaceX+3/40*width*i,0.9*height);
                ctx.lineTo(spaceX+3/40*width*i,7/8*height);//画横刻度
            }
            for(var i=1;i<11;i++)
            {
                ctx.moveTo(0.1*width,0.9*height-3/40*height*i);
                ctx.lineTo(7/60*width,0.9*height-3/40*height*i);//画纵刻度
            }
            for(var i=0;i<10;i++)
            {
                var str=json['data'][i]['time'];
                str.substring(0,1);
                ctx.fillText(json['data'][i]['time'].substring(5,10),spaceX+3/40*width*(i+1)-15,0.94*height);//横刻度值
            }
           ctx.fillText(json['data'][0]['time'].substring(0,4),19/20*width,0.98*height)
            var max=json['data'][0]['num'];
            var min=json['data'][0]['num'];
            for(var i=1;i<10;i++)
            {
                if(json['data'][i]['num']>max)
                {
                    var k=i;
                    max=json['data'][k]['num'];
                }
                if(json['data'][i]['num']<min)
                {
                    var j=i;
                    min=json['data'][j]['num'];
                }
            }
            var spaceing=(max-min)/7;
            for(var i=1;i<11;i++)
            {
                var number=spaceing*(i-1)+parseInt(min);
                ctx.fillText(number,0.05*width,0.91*height-3/40*height*i);//纵向刻度值
            }
            ctx.stroke();
            ctx.closePath();
            ctx.moveTo(spaceX+3/40*width,33/40*height-((parseInt(json['data'][0]['num'])-parseInt(min))*height)/1200);
            // ctx.arc(spaceX+3/40*width,33/40*height-((parseInt(json['data'][0]['num'])-parseInt(min))*height)/1200,3,0,2*Math.PI);

            for(var i=1;i<10;i++)
            {
                ctx.lineWidth=2;
                ctx.strokeStyle="#000";
                 ctx.lineTo(spaceX+3/40*width*(i+1),33/40*height-((parseInt(json['data'][i]['num'])-parseInt(min))*height)/1200);//描点
                 // ctx.fillStyle="red";
                 //  ctx.quadraticCurveTo(spaceX+3/40*width*(i+1),33/40*height-((parseInt(json['data'][i]['num'])-parseInt(min))*height)/1200,spaceX+3/40*width*(i+2),33/40*height-((parseInt(json['data'][i+1]['num'])-parseInt(min))*height)/1200);
                 // ctx.arc(spaceX+3/40*width*(i+1),33/40*height-((parseInt(json['data'][i]['num'])-parseInt(min))*height)/1200,3,0,2*Math.PI);

            }
            ctx.stroke();