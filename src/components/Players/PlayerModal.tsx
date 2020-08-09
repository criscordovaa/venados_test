import React from 'react';
import {
    Backdrop,
    Dialog,
    DialogTitle,
    DialogContent, IconButton
} from '@material-ui/core';
import {PlayerConsumer} from './hooks/PlayerContext';
import {getDateFormatted} from 'utils//date';
import CloseIcon from '@material-ui/icons/Close';

const PlayerModal: React.FC = () => {
    return (
        <React.Fragment>
            <PlayerConsumer>
                {
                    playerContext => {
                        const {player, setOpen, open} = playerContext;
                        const {
                            name,
                            first_surname,
                            second_surname,
                            position,
                            birthday,
                            birth_place,
                            weight,
                            height,
                            image,
                            number,
                            last_team
                        } = player;
                        return (
                            playerContext && (
                                <Dialog
                                    onClose={() => setOpen(false)}
                                    aria-labelledby="customized-dialog-title"
                                    className={'modal-player'}
                                    open={open}
                                    BackdropComponent={Backdrop}
                                >
                                    <DialogTitle className="modal-player-header">
                                        <IconButton onClick={() => setOpen(false)} aria-label="close" className={'close-modal'}>
                                            <CloseIcon />
                                        </IconButton>
                                        <div className="group">
                                            <span className="review">ficha tecnica</span>
                                            <div className={'review-info'}>
                                                <div className="image-container">
                                                    <img
                                                        src={image}
                                                        alt=""/>
                                                </div>
                                                <span className="names">{name}</span>
                                                <span className="names">{first_surname}</span>
                                                <span className="names">{second_surname}</span>
                                                <span className="position">{position}</span>
                                            </div>
                                        </div>
                                    </DialogTitle>
                                    <DialogContent className={'modal-player-body'}>
                                        <div className="info">
                                            <span className={'title'}>fecha de nacimiento</span>
                                            <span className={'value'}>{getDateFormatted(new Date(birthday))}</span>
                                        </div>
                                        <div className="info">
                                            <span className={'title'}>lugar de nacimiento</span>
                                            <span className={'value'}>{birth_place}</span>
                                        </div>
                                        <div className="info">
                                            <span className={'title'}>peso</span>
                                            <span className={'value'}>{weight}</span>
                                        </div>
                                        <div className="info">
                                            <span className={'title'}>altura</span>
                                            <span className={'value'}>{height}</span>
                                        </div>
                                        <div className="info">
                                            <span className={'title'}>equipo anterior</span>
                                            <span className={'value'}>{last_team}</span>
                                        </div>

                                        <div className="info">
                                            <span className={'title'}>numero</span>
                                            <span className={'value'}>{number}</span>
                                        </div>
                                    </DialogContent>
                                </Dialog>
                            )
                        )
                    }
                }
            </PlayerConsumer>
        </React.Fragment>
    );
};

export default PlayerModal;
