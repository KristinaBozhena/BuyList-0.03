console.log("Hi");
$(function(){
    var templateRow = $(".row-template").html();
    var $blList=$(".bl-list");
    var $input=$(".add-prod-text");
    
    var templateList = $(".bl-item-list-template").html();
    var $blListItemNotBought=$(".bl-title-list-not-bought");
    var $blListItemBought=$(".bl-title-list-bought");
    
    function addOneItem(name){
        var $node=$(templateRow);
        var quantity=1;
        var $plus=$node.find(".bl-plus");
        var $minus=$node.find(".bl-minus");
        var $blLabel=$node.find(".bl-label");
        var $delete=$node.find(".bl-delete");
        var $bought=$node.find(".bl-buy");
        var $unbought=$node.find(".bl-buy-bought");
        var $productName=$node.find(".bl-product");
        var $input=$(".add-prod-text");
        var $inputName=$(".bl-change-name");
        
        var $nodeList=$(templateList);
        var $nameItem=$nodeList.find(".bl-name-prod");
        var $countItem=$nodeList.find(".bl-count-list");
        
        $node.addClass("state-not-bought");
        $node.addClass("state-not-change-name");
        
        $blList.append($node);
        $node.find(".item").text(name);
        $blLabel.text(quantity);
        $productName.text(name);
        
        $blListItemNotBought.append($nodeList);
        $nameItem.text(name);
    
        
        function onBuyClick(){
            $node.addClass("state-bought");
            $node.removeClass("state-not-bought");
            $blListItemBought.append($nodeList);
        }
        $bought.click(onBuyClick);

        function onUnBuyClick(){
            $node.addClass("state-not-bought");
            $node.removeClass("state-bought");
            $blListItemNotBought.append($nodeList);
        }
        $unbought.click(onUnBuyClick);

        function plus(){
            quantity++;
            $blLabel.text(quantity);
            $countItem.text(quantity);
        }
        $plus.click(plus);
        
        function minus(){
            if(quantity>1){
                quantity--;
                $blLabel.text(quantity);
                $countItem.text(quantity);
            }
        }     
        $minus.click(minus);
     
        function deleteProd(){
            $node.remove();
            $nodeList.remove();
        }
        $delete.click(deleteProd);
        
//        var name = $productName.text();
//        $inputName.val(name);
//        
//        $productName.click(function(){
//            $node.addClass("state-change-name");
//            $node.removeClass("state-not-change-name"); 
//            
//              
//            $inputName.focus(); 
//            $inputName.onblur = function() {
//                $node.removeClass("state-change-name");
//                $node.addClass("state-not-change-name");   
//            };  
//        });

        function updateNode(node, fn) { node.fadeOut(250, function(){
            fn();
            node.fadeIn(250); });
        }
        
        function updateNodeList(nodeList, fn) { nodeList.fadeOut(250, function(){
            fn();
            nodeList.fadeIn(250); });
        }
    }
    
    function onAddClick(){
        var text=$input.val();
        console.log("Name", text);
        if(text){
            console.log("Name", text);
            addOneItem(text);
            $input.val("");
        }
        $input.focus();
    }
    $(".bl-add-product").click(onAddClick);
    
    function onEnterClick(event){
        if(event.which === 13) {
            var text=$input.val();
            console.log("Name", text);
            if(text){
                addOneItem(text);
                $input.val("");
            }
            $input.focus();
        }
    }
    $(".add-prod-text").keypress(onEnterClick);
       
   
    addOneItem("Бургер");
    addOneItem("Картопля Фрі");
    addOneItem("Бурітто");
});