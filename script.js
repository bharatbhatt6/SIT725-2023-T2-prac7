const cardList = [{
    title: 'cat 2',
    path: 'Cats/Cat2.jpeg',
    subTitle: 'About Cat 2',
    description: 'Description of Cat 2'
},
{
    title: 'cat 3',
    path: 'Cats/Cat3.jpeg',
    subTitle: 'About Cat 3',
    description: 'Description of Cat 3'
},
];

const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend = `
            <div class="col s4 center-align">
                <div class="card medium">
                    <div class="card-image waves-effect waves-block waves-light">
                        <img class="activator" src="${item.path}">
                    </div>
                    <div class="card-content">
                        <span class="card-title activator grey-text text-darken-4">${item.title}<i class="material-icons right">more_vert</i></span>
                        <p><a href="#">${item.subTitle}</a></p>
                    </div>
                    <div class="card-reveal">
                        <span class="card-title grey-text text-darken-4">${item.title}<i class="material-icons right">close</i></span>
                        <p class="card-text">${item.description}</p>
                    </div>
                </div>
            </div>`;
        $("#card-section").append(itemToAppend);
    });
}

const formSubmitted = () => {
    let formData = {};
    formData.firstName = $('#first_name').val();
    formData.lastName = $('#last_name').val();
    formData.password = $('#password').val();
    formData.email = $('#email').val();

    console.log(formData);
}

const cancelform = () => {
    $('.modal').modal('close');
};

$(document).ready(function () {
    $('.materialboxed').materialbox();
    $('#formSubmit').click(() => {
        formSubmitted();
    });
    $('#formcancel').click(() => {
        cancelform();
    });
    addCards(cardList);
    $('.modal').modal();
});