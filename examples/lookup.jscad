// title: Lookup()
// author: OpenSCAD.org, adapted by Rene K. Mueller
// description: testing lookup() function 

// from http://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Mathematical_Functions

function get_cylinder_h(p) { 
   return lookup(p, [
                [ -200, 5 ],
                [ -50, 20 ],
                [ -20, 18 ],
                [ +80, 25 ],
                [ +150, 2 ]
        ]);
}

function main() { 
   var w = new Array();
   for (var i =-100; i<=100; i+=5) {
      //echo(i, get_cylinder_h(i));
      w.push( translate([ i, 0, -30 ], 
         cylinder({r1: 2, r2: 2, h: get_cylinder_h(i)*3, fn: 16})).
            setColor(hsl2rgb(((i+100)/200)*0.3+0.6,1,0.5)));
   }
   return w;
}
