var buckets={common:{}};buckets.common.defaultCompare=function(a,b){return a<b?-1:a===b?0:1};buckets.common.defaultEquals=function(a,b){return a===b};buckets.common.defaultToString=function(a){return"[object String]"===Object.prototype.toString.call(a)?a:null===a?"BUCKETS_NULL_OBJECT":void 0===a?"BUCKETS_UNDEFINED_OBJECT":a.toString()};buckets.common.reverseCompareFunction=function(a){return null===a||void 0===a?function(a,c){return a<c?1:a===c?0:-1}:function(b,c){return-1*a(b,c)}};
buckets.common.compareToEquals=function(a){return function(b,c){return 0===a(b,c)}};buckets.arrays={};buckets.arrays.indexOf=function(a,b,c){for(var c=c||buckets.common.defaultEquals,d=a.length,e=0;e<d;e++)if(c(a[e],b))return e;return-1};buckets.arrays.lastIndexOf=function(a,b,c){for(var c=c||buckets.common.defaultEquals,d=a.length,e=-1,f=0;f<d;f++)c(a[f],b)&&(e=f);return e};buckets.arrays.contains=function(a,b,c){return 0<=buckets.arrays.indexOf(a,b,c)};
buckets.arrays.frequency=function(a,b,c){for(var c=c||buckets.common.defaultEquals,d=a.length,e=0,f=0;f<d;f++)c(a[f],b)&&e++;return e};buckets.arrays.equals=function(a,b,c){c=c||buckets.common.defaultEquals;if(a.length!==b.length)return!1;for(var d=a.length,e=0;e<d;e++)if(!c(a[e],b[e]))return!1;return!0};buckets.arrays.copy=function(a){return a.concat()};buckets.arrays.swap=function(a,b,c){if(0>b||b>=a.length||0>c||c>=a.length)return!1;var d=a[b];a[b]=a[c];a[c]=d;return!0};
buckets.LinkedList=function(){this.lastNode=this.firstNode=null;this.nElements=0};buckets.LinkedList.prototype.add=function(a){return this.addElementAtIndex(a,this.nElements)};
buckets.LinkedList.prototype.addElementAtIndex=function(a,b){if(0>b||b>this.nElements||void 0===a)return!1;var c={element:a,next:null};if(0===this.nElements)this.lastNode=this.firstNode=c;else if(b===this.nElements)this.lastNode=this.lastNode.next=c;else if(0===b)c.next=this.firstNode,this.firstNode=c;else{for(var d=this.firstNode,e=0;e<b-1;e++)d=d.next;c.next=d.next;d.next=c}this.nElements++;return!0};buckets.LinkedList.prototype.first=function(){if(null!==this.firstNode)return this.firstNode.element};
buckets.LinkedList.prototype.last=function(){if(null!==this.lastNode)return this.lastNode.element};buckets.LinkedList.prototype.elementAtIndex=function(a){if(!(0>a||a>=this.nElements)){if(a===this.nElements-1)return this.lastNode.element;for(var b=this.firstNode,c=0;c<a;c++)b=b.next;return b.element}};buckets.LinkedList.prototype.indexOf=function(a,b){var c=b||buckets.common.defaultEquals;if(void 0===a)return-1;for(var d=this.firstNode,e=0;null!==d;){if(c(d.element,a))return e;e++;d=d.next}return-1};
buckets.LinkedList.prototype.contains=function(a,b){return 0<=this.indexOf(a,b)};buckets.LinkedList.prototype.remove=function(a,b){var c=b||buckets.common.defaultEquals;if(1>this.nElements||void 0===a)return!1;for(var d=null,e=this.firstNode;null!==e;){if(c(e.element,a)){if(e===this.firstNode){if(this.firstNode=this.firstNode.next,e===this.lastNode)this.lastNode=null}else{if(e===this.lastNode)this.lastNode=d;d.next=e.next;e.next=null}this.nElements--;return!0}d=e;e=e.next}return!1};
buckets.LinkedList.prototype.clear=function(){this.lastNode=this.firstNode=null;this.nElements=0};buckets.LinkedList.prototype.removeElementAtIndex=function(a){if(!(0>a||a>=this.nElements)){if(1===this.nElements)a=this.firstNode.element,this.lastNode=this.firstNode=null;else{for(var b=null,c=this.firstNode,d=0;d<a;d++)b=c,c=c.next;a=c.element;if(c===this.lastNode)this.lastNode=b;else if(c===this.firstNode)this.firstNode=c.next;if(null!==b)b.next=c.next,c.next=null}this.nElements--;return a}};
buckets.LinkedList.prototype.iterator=function(){var a=null,b=null,c=this.firstNode;return{hasNext:function(){return null!==c},next:function(){if(null!==c)return a=b,b=c,c=b.next,b.element},remove:function(){if(null!==b){var d=b.element;b===this.firstNode?b===this.lastNode?this.lastNode=this.firstNode=null:this.firstNode=c:b===this.lastNode?(this.lastNode=a,a.next=null):a.next=b.next;this.nElements--;return d}},replace:function(a){if(null!==b){var c=b.element;b.element=a;return c}}}};
buckets.LinkedList.prototype.reverse=function(){for(var a=null,b=this.firstNode,c=null;null!==b;)c=b.next,b.next=a,a=b,b=c;c=this.firstNode;this.firstNode=this.lastNode;this.lastNode=c};buckets.LinkedList.prototype.toArray=function(){for(var a=[],b=this.firstNode;null!==b;)a.push(b.element),b=b.next;return a};buckets.LinkedList.prototype.size=function(){return this.nElements};buckets.LinkedList.prototype.isEmpty=function(){return 0>=this.nElements};
buckets.Dictionary=function(a){this.table={};this.nElements=0;this.toStr=a||buckets.common.defaultToString};buckets.Dictionary.prototype.get=function(a){a=this.table[this.toStr(a)];return void 0===a?void 0:a.value};buckets.Dictionary.prototype.set=function(a,b){if(!(void 0===a||void 0===b)){var c,d=this.toStr(a);c=this.table[d];void 0===c?(this.nElements++,c=void 0):c=c.value;this.table[d]={key:a,value:b};return c}};
buckets.Dictionary.prototype.remove=function(a){var a=this.toStr(a),b=this.table[a];if(void 0!==b)return delete this.table[a],this.nElements--,b.value};buckets.Dictionary.prototype.keys=function(){var a=[],b;for(b in this.table)this.table.hasOwnProperty(b)&&a.push(this.table[b].key);return a};buckets.Dictionary.prototype.values=function(){var a=[],b;for(b in this.table)this.table.hasOwnProperty(b)&&a.push(this.table[b].value);return a};
buckets.Dictionary.prototype.containsKey=function(a){return void 0!==this.get(a)};buckets.Dictionary.prototype.clear=function(){this.table={};this.nElements=0};buckets.Dictionary.prototype.size=function(){return this.nElements};buckets.Dictionary.prototype.isEmpty=function(){return 0>=this.nElements};buckets.Heap=function(a){this.data=[];this.compare=a||buckets.common.defaultCompare};buckets.Heap.prototype.leftChildIndex=function(a){return 2*a+1};
buckets.Heap.prototype.rightChildIndex=function(a){return 2*a+2};buckets.Heap.prototype.parentIndex=function(a){return Math.floor((a-1)/2)};buckets.Heap.prototype.minIndex=function(a,b){return b>=this.data.length?a>=this.data.length?-1:a:0>=this.compare(this.data[a],this.data[b])?a:b};buckets.Heap.prototype.siftUp=function(a){for(var b=this.data[a];0<a;){var c=this.parentIndex(a);if(0<this.compare(this.data[c],b))this.data[a]=this.data[c],a=c;else break}this.data[a]=b};
buckets.Heap.prototype.siftDown=function(a){for(var b=this.minIndex(this.leftChildIndex(a),this.rightChildIndex(a));0<=b&&0<this.compare(this.data[a],this.data[b]);){var c=this.data[b];this.data[b]=this.data[a];this.data[a]=c;a=b;b=this.minIndex(this.leftChildIndex(a),this.rightChildIndex(a))}};buckets.Heap.prototype.peek=function(){if(0<this.data.length)return this.data[0]};buckets.Heap.prototype.add=function(a){if(void 0!==a)return this.data.push(a),this.siftUp(this.data.length-1),!0};
buckets.Heap.prototype.removeRoot=function(){if(0<this.data.length){var a=this.data[0];this.data[0]=this.data[this.data.length-1];this.data.splice(this.data.length-1,1);0<this.data.length&&this.siftDown(0);return a}};buckets.Heap.prototype.contains=function(a){var b=buckets.common.compareToEquals(this.compare);return buckets.arrays.contains(this.data,a,b)};buckets.Heap.prototype.size=function(){return this.data.length};buckets.Heap.prototype.isEmpty=function(){return 0>=this.data.length};
buckets.Heap.prototype.clear=function(){this.data.length=0};buckets.Stack=function(){this.list=new buckets.LinkedList};buckets.Stack.prototype.push=function(a){return this.list.addElementAtIndex(a,0)};buckets.Stack.prototype.add=function(a){return this.list.addElementAtIndex(a,0)};buckets.Stack.prototype.pop=function(){return this.list.removeElementAtIndex(0)};buckets.Stack.prototype.peek=function(){return this.list.first()};buckets.Stack.prototype.size=function(){return this.list.size()};
buckets.Stack.prototype.contains=function(a,b){return this.list.contains(a,b)};buckets.Stack.prototype.isEmpty=function(){return this.list.isEmpty()};buckets.Stack.prototype.clear=function(){this.list.clear()};buckets.Queue=function(){this.list=new buckets.LinkedList};buckets.Queue.prototype.enqueue=function(a){return this.list.add(a)};buckets.Queue.prototype.add=function(a){return this.list.add(a)};
buckets.Queue.prototype.dequeue=function(){if(0!==this.list.size()){var a=this.list.first();this.list.removeElementAtIndex(0);return a}};buckets.Queue.prototype.peek=function(){if(0!==this.list.size())return this.list.first()};buckets.Queue.prototype.size=function(){return this.list.size()};buckets.Queue.prototype.contains=function(a,b){return this.list.contains(a,b)};buckets.Queue.prototype.isEmpty=function(){return 0>=this.list.size()};buckets.Queue.prototype.clear=function(){this.list.clear()};
buckets.PriorityQueue=function(a){this.heap=new buckets.Heap(buckets.common.reverseCompareFunction(a))};buckets.PriorityQueue.prototype.enqueue=function(a){return this.heap.add(a)};buckets.PriorityQueue.prototype.add=function(a){return this.heap.add(a)};buckets.PriorityQueue.prototype.dequeue=function(){if(0!==this.heap.size()){var a=this.heap.peek();this.heap.removeRoot();return a}};buckets.PriorityQueue.prototype.peek=function(){return this.heap.peek()};
buckets.PriorityQueue.prototype.contains=function(a){return this.heap.contains(a)};buckets.PriorityQueue.prototype.isEmpty=function(){return this.heap.isEmpty()};buckets.PriorityQueue.prototype.size=function(){return this.heap.size()};buckets.PriorityQueue.prototype.clear=function(){this.heap.clear()};buckets.Set=function(a){this.dictionary=new buckets.Dictionary(a)};buckets.Set.prototype.contains=function(a){return this.dictionary.containsKey(a)};
buckets.Set.prototype.add=function(a){if(this.contains(a)||void 0===a)return!1;this.dictionary.set(a,a);return!0};buckets.Set.prototype.remove=function(a){return this.contains(a)?(this.dictionary.remove(a),!0):!1};buckets.Set.prototype.iterator=function(){var a=this.dictionary.keys(),b=this,c=-1,d=0;return{hasNext:function(){return d<a.length},next:function(){if(!(d>=a.length))return c=d,d=c+1,b.dictionary.get(a[c])},remove:function(){if(c<a.length&&0<=c)return b.dictionary.remove(a[c])}}};
buckets.Set.prototype.toArray=function(){return this.dictionary.values()};buckets.Set.prototype.isEmpty=function(){return this.dictionary.isEmpty()};buckets.Set.prototype.size=function(){return this.dictionary.size()};buckets.Set.prototype.clear=function(){this.dictionary.clear()};buckets.Bag=function(a){this.toStrF=a||buckets.common.defaultToString;this.dictionary=new buckets.Dictionary(this.toStrF);this.nElements=0};
buckets.Bag.prototype.add=function(a,b){if(isNaN(b)||void 0===b)b=1;if(void 0===a||0>=b)return!1;this.contains(a)?this.dictionary.get(a).copies+=b:this.dictionary.set(a,{value:a,copies:b});this.nElements+=b;return!0};buckets.Bag.prototype.count=function(a){return this.contains(a)?this.dictionary.get(a).copies:0};buckets.Bag.prototype.contains=function(a){return this.dictionary.containsKey(a)};
buckets.Bag.prototype.remove=function(a,b){if(isNaN(b)||void 0===b)b=1;if(void 0===a||0>=b)return!1;if(this.contains(a)){var c=this.dictionary.get(a);this.nElements=b>c.copies?this.nElements-c.copies:this.nElements-b;c.copies-=b;0>=c.copies&&this.dictionary.remove(a);return!0}return!1};buckets.Bag.prototype.toArray=function(){for(var a=[],b=this.dictionary.values(),c=b.length,d=0;d<c;d++)for(var e=b[d],f=e.value,e=e.copies,g=0;g<e;g++)a.push(f);return a};
buckets.Bag.prototype.toSet=function(){for(var a=new buckets.Set(this.toStrF),b=this.dictionary.values(),c=b.length,d=0;d<c;d++)a.add(b[d].value);return a};buckets.Bag.prototype.iterator=function(){var a=this.dictionary.values(),b=this,c=0,d=-1,e=0;return{hasNext:function(){return 0<c||e<a.length},next:function(){if(!(0>=c&&e>=a.length))return 0>=c?(d=e,e=d+1,c=a[d].copies-1):c--,a[d].value},remove:function(){if(d<a.length&&0<=d)return b.remove(a[d].value)}}};buckets.Bag.prototype.size=function(){return this.nElements};
buckets.Bag.prototype.isEmpty=function(){return 0===this.nElements};buckets.Bag.prototype.clear=function(){this.nElements=0;this.dictionary.clear()};
