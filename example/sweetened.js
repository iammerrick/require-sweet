macro oddadd {
 case (($x:lit) <+> $y:lit) => {
   $x + $y
 }
}

macro def {
  case $name:ident $params $body => {
    function $name $params $body
  }
}

var z = oddadd((2) <+> 4);
console.log(z);

def winning() {
  console.log('win');
}

winning();