//
(function(){
    if (!window.app) {
        window.app = {};
    }
})();
(function(app){
    app.structure.bst = {
        root: {// root
            value:"", 
            node_left: {
                value:"",
                node_left: {// 1.1
                    value:"", 
                    node_left: {
                        value:"",
                        node_left: {
                            value:"",
                            node_left: {},
                            node_right: {}    
                        },
                        node_right: {
                            value:"",
                            node_left: {},
                            node_right: {}                             
                        }
                    },
                    node_right: {
                        value:"",
                        node_left: {
                            value:"",
                            node_left: {},
                            node_right: {}                             
                        },
                        node_right: {
                            value:"",
                            node_left: {},
                            node_right: {}                            
                        }
                    }
                },
                node_right: {
                    value:"",
                    node_left: {},
                    node_right: {} 
                }
            },
            node_right: { // 1.2
                value:"",
                node_left: {},
                node_right: {}
            }
       }
        
    };
})(window.app || {});

