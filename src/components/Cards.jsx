import Card from './Card';

export default function Cards(props) {
   const onClose = () => window.alert('Emulamos que se cierra la card');
   return (
      <div>
         {props.characters.map(({ name, status, species, gender, origin, image, id }) => {
            return (<Card 
               onClose={onClose}
               name={name} 
               status={status} 
               species={species} 
               gender={gender} 
               origin={origin.name} 
               image={image} 
               key={id} 
               />)
         }

         )}
      </div>
   )
}
