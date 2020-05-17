import React from 'react';
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';

import win from '../../../img/win.png';

function Winner({guess}){
    return(
        <div>
            { setTimeout(() => { 
                Swal.fire({
                    title: 'Sweet!',
                    text: `🏆 You won in ${guess} moves! 🏆`,
                    imageUrl: win,
                    imageWidth: 200,
                    imageHeight: 200,
                    imageAlt: 'Custom image',
                })        
              }, 1100)
            }
        </div>
    )
}

Winner.propTypes = {
    guess: PropTypes.number.isRequired
}

export default Winner;
