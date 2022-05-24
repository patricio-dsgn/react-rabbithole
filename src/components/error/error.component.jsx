import React from "react";
import { Redirect } from "react-router-dom";

class Error extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tieneError: false,
            mensajeError: "algo salio mal amig@!"
        }
    }

    static getDerivedStateFromError(error) {
        return {tieneError: true, mensajeError: error.mensajeError};
    }

    // componentDidCatch(error) {
    //     console.log(error);
    // }

    render() {
        if (this.state.tieneError) {
            return <Redirect to="/" />
            
        }
        return this.props.children;
    }

}

export default Error;

            