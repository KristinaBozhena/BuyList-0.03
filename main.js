console.log("Hi");
$(function(){
    var template = $(".row-template").html();
    var $blList=$(".bl-list");
    var $input=$(".add-prod-text");
    function addOneItem(name){
        var $node=$(template);
        var quantity=1;
        var $plus=$node.find(".bl-plus");
        var $minus=$node.find(".bl-minus");
        var $blLabel=$node.find(".bl-label");
        var $delete=$node.find(".bl-delete");
        var $bought=$node.find(".bl-buy");
        var $unbought=$node.find(".bl-buy-bought");
        var $productName=$node.find(".bl-product");
        var $input=$(".add-prod-text");
        var $changeName=$(".bl-change-name");
        $node.addClass("state-not-bought");
        $node.addClass("state-not-change-name");

        $blList.append($node);
        $node.find(".item").text(name);
        $blLabel.text(quantity);
        $productName.text(name);

        function onBuyClick(){
            $node.addClass("state-bought");
            $node.removeClass("state-not-bought");
        }
        $bought.click(onBuyClick);

        function onUnBuyClick(){
            $node.addClass("state-not-bought");
            $node.removeClass("state-bought");
        }
        $unbought.click(onUnBuyClick);

        function plus(){
            quantity++;
            $blLabel.text(quantity);
        }
        $plus.click(plus);
        
        function minus(){
            if(quantity>1){
                quantity--;
                $blLabel.text(quantity);
            }
        }     
        $minus.click(minus);
     
        function deleteProd(){
            $node.remove();
        }
        $delete.click(deleteProd);
        
        /*$productName.click(function(){
            var $oldName = $productName.text();
            $node.addClass("state-change-name");
            $node.removeClass("state-not-change-name");  
            var $newName = "";
            console.log("old name", $oldName);
            $changeName.val($oldName);
            
            $changeName.on("input", function() {
                console.log("this name", $(this).val());
                $newName=$(this).val();
                console.log("new name", $newName);
                $productName.text($newName);
            });
            
            $changeName.focus(); 
            $changeName.focusout(function() {
                $node.removeClass("state-change-name");
                $node.addClass("state-not-change-name");
                
            });
            
            
        
        });
        
        $node.addClass("state-not-bought");
        $node.addClass("state-not-change-name");*/
        
        function updateNode(node, fn) { node.fadeOut(250, function(){
            fn();
            node.fadeIn(250); });
        }
        
    }
    
    $(".bl-add-product").click(function(){
        var text=$input.val();
        if(text){
            addOneItem(text);
            $input.val("");
        }
         $input.focus();
    });
    
    $(".bl-add-product").keypress(function(event) {
        if (event.which === 13) {
            var text=$input.val();
            if(text){
                addOneItem(text);
                $input.val("");
            }
            $input.focus();
        }
    });
   
    addOneItem("Бургер");
    addOneItem("Картопля Фрі");
    addOneItem("Бурітто");
});