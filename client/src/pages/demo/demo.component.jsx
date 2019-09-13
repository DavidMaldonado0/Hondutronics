import React from 'react';
import Switch from '../../components/toggle-switch/toggle-switch.component';
import './demo.styles.scss';
import Slide from 'react-reveal/Slide';

const Demo = () => (
    <div className="container demo">
        <h1 className="title">Demo</h1>
        <p>Consulta datos reales de nuestros productos comparados a productos convencionales</p>
        <Slide bottom>
        <div className="row">
            <div className="col-md-6">
                <h3 className="h3">Smart</h3>
                <div className="card">
                    <i className="far fa-lightbulb fa-5x iconsmart"></i>
                    <Switch/>
                    <p>data</p>
                </div>
                <div className="card">
                    <i className="fas fa-plug fa-5x iconsmart"></i>
                    <Switch/>
                    <p className="info">data</p>
                </div>
                <div className="card">
                    <i className="fas fa-power-off fa-5x iconsmart"></i>
                    <Switch/>
                    <p>data</p>
                </div>
            </div>
            <div className="col-md-6">
                <h3 className="h3">Tradicional</h3>
                <div className="card">
                    <i className="fas fa-lightbulb fa-5x iconconv"></i>
                    <Switch/>
                    <p>data</p>
                </div>
                <div className="card">
                    <i className="fas fa-plug fa-5x iconconv"></i>
                    <Switch/>
                    <p>data</p>
                </div>
                <div className="card">
                    <i className="fas fa-power-off fa-5x iconconv"></i>
                    <Switch/>
                    <p>data</p>
                </div>
            </div>
        </div>
        </Slide>
    </div>
);


export default Demo;
