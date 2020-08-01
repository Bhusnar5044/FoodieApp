import react, {components} from 'react';

class OfferCard extends components{
    render(){
        return(
            <div class="card">
                <img src="img_avatar2.png" alt="Avatar" style="width:92%"/>
                <div class="container">
                    <h4><b>Restaurant Title</b></h4> 
                    <p>Description</p> 
                </div>
            </div> 
        );
    }
}

export default OfferCard;