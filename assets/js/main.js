// // proffesor code 
// const app  = {
//     item :  {
//         name: undefined,
//         comment: undefined
//     },
//     init : function () {
//         app.item.name =   $('#clave');
//         app.item.comment =   $('#valor');

//         app.setup ();
//     },

//     setup: function () {
//         $('#addBnt').click (app.addComment) ;
//         $('#clearBnt').click (app.clearComments) ;
//     },

//     addComment: function (event) {
//         $('#ale').append ( `<p> ${app.item.name.val()} </p>\
//                             <p>  ${app.item.comment.val()} </p>`);

//     },

//     clearComments: function (event) {
//         $('#ale').empty();
//     }
// };
// $(document).ready ( app.init );

// my code
const app = {
    item: {
        name: undefined,
        comment: undefined
    },
    init: function () {
        app.item.name = $('#name');
        app.item.comment = $('#clave');
        app.setup();
        app.listComments();
    },

    setup: function () {
        $('#addBtn').click(app.saveComments);
        $('#clearBtn').click(app.clearComments);
    },

    saveComments: function () {
        localStorage.setItem(app.item.name.val(), app.item.comment.val());
        app.listComments();
        $('#name').val("");
        $('#clave').val("");
    },
    listComments: function () {
        $('#home-comment').empty();
        for (let clave in localStorage) {
            let comentary = localStorage[clave];
            $('#home-comment').append(`<div class="panel-body" id="comment"><h1> ${clave} </h1>
                            <h3>  ${comentary}</h3></div>`);

        }
    },
    clearComments: function () {
        $('#home-comment').empty();
        localStorage.clear();

    }
};
$(document).ready(app.init);