    import React from 'react';
    import PropTypes from "prop-types";

    export const Profile = props => {
    /*inline style*/
    const styleObject = {border : "solid 1px black" , marginLeft : "100" , marginTop : "100", textAlign:"center"}
    const childrenn = props.children ;
    
    return (
    <div width="20%" style={styleObject}>
    <img src={childrenn} alt= " profilImg " />
    <h2>{props.fullName}</h2>
    <p>{props.bio}</p>
    <h4>{props.profession}</h4>
    
    <button onClick= {() => props.handleName(props.fullName)}>
         Click Me
       </button>
    
    </div>
    ) ;
    } ;

     
    
    /*default props*/
    Profile.defaultProps = {
      fullName : "FirstName LastName",
      bio: "qu’est ce que votre carrière professionnelle ? écrivez une pharagraphe … ",
      profession : "votre profession ici"
    };


    /*check props */
    Profile.propTypes = {
      fullName: PropTypes.string,
      bio: PropTypes.string,
      profession: PropTypes.string,
      childrenn: PropTypes.string,
      handleName: PropTypes.func
             } ;
