use(function () {
   var items = [];
    var root = currentPage.getAbsoluteParent(2);
    if(root == null){
        root = currentPage;
    }
    
    log.info("############### Root page is : " + root.getTitle());
    
    var it = root.listChildren(new Packages.com.day.cq.wcm.api.PageFilter());
    while(it.hasNext()){
        var page = it.next();
        items.push(page);
    }
    
    return {
        items: items,
        root: root
    }
});