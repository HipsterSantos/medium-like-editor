//add id index automatically 1-indexed 
        //
        var counter = 0;
        function Node(tag){
            this.tag = tag;
            this.value = this.tag.value;
            this.ref = 0;
            this.next = null;
        }
        function LinkedList(){
            this.head  = null;
            this.size =0;
        }
        LinkedList.prototype.isEmpty = function(){
            return this.size == 0;
        }
        LinkedList.prototype.insert = function(value){
            if(this.head == null){
                this.head  = new Node(value);
                
            }else{
                var temp = this.head ; 
                this.head = new Node(value);
                this.head.next = temp;
        
            }
            this.size++;
            this.ref = value.className = 'pan'+this.size;
                
        }

        LinkedList.prototype.remove = function(data){

        }
        var ssl1 = new  LinkedList();
   function onKeyPress(e){
    var p = document.querySelector('#initparagraph');   
   
    if(e.keyCode ==13){
           e.preventDefault();//
           
           
           ssl1.insert(p.firstElementChild)
           p.insertAdjacentHTML('afterend',p.firstElementChild.outerHTML);
           console.log('Enter pressed ',ssl1)
            
           
       }
       else if (e.keyCode == 8){
           e.preventDefault();
           console.log('backspce pressed')
       }
   }