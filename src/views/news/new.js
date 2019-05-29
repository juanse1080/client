import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Chip from '@material-ui/core/Chip';
import TimeIcon from '@material-ui/icons/AccessTime';
import timeFormat from '../../utils/Time'
import Hidden from '@material-ui/core/Hidden';
import data from '../../news';

const styles = theme => ({
    img: {
        borderRadius: 5,
        width: '100%',
        padding: theme.spacing(1),
        [theme.breakpoints.down('sm')]: {
            height: '200px',
        },
        [theme.breakpoints.up('md')]: {
            height: '500px',
        },
        [theme.breakpoints.up('lg')]: {
            height: '500px',
        },
    },
});

function MediaQuery(props) {
    const { classes } = props;

    return (
        <Container fixed>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography style={{'fontWeight': 'bold', 'fontStyle': 'italic'}}>{data.title}</Typography>
                    </Grid>
                
                    <Grid item xs={12}>
                        <CardMedia
                        className={classes.img}
                        image={data.photo}
                        title="Noticia"
                        >
                            <Hidden only={['xs', 'sm']}>
                                <Chip 
                                icon={<TimeIcon />} 
                                label={timeFormat(data.created_at)} 
                                style={{'position':'relative', 'top': 'calc(100% - 32px)', 'left': 'calc(100% - 200px)'}}
                                />
                            </Hidden>
                            
                        </CardMedia>
                    </Grid>
                    <Grid item xs={12}>
                        <Hidden only={['md', 'lg', 'xl']}>
                            <Chip icon={<TimeIcon />} label={timeFormat(data.created_at)} style={{'float':'right'}}/>
                        </Hidden>
                    </Grid>
                    <Grid item xs={12}>
                        {/* {data.description} */}
                        {/* <p>La decisión fue adoptada ante la&nbsp;<strong>presencia de nuevos testimonios de confesos integrantes&nbsp;</strong>y colaboradores del extinto Cartel de Medellín y otras evidencias recopiladas&nbsp;por el ente investigador.</p>
                        <p><strong>Lea además:&nbsp;<a href="https://www.rcnradio.com/judicial/por-que-fue-tan-importante-guillermo-cano-y-piden-que-se-reabra-su-caso-en-la-cidh" rel="nofollow" target="_blank">¿Por qué fue tan importante Guillermo Cano y piden que se reabra su caso en la CIDH?</a></strong></p>
                        <p>De acuerdo con los elementos de prueba, <strong>'Popeye' </strong>hizo&nbsp;parte del denominado&nbsp;<strong>brazo armado de la estructura de Pablo Escobar&nbsp;</strong>y, al parecer, tuvo conocimiento y participación en la planeación del atentado contra el director del diario <strong>El Espectador.</strong></p>
                        <p>El fiscal Espitia indicó que “<strong>se logra acreditar la participación de alias Popeye&nbsp;en la reunión en la cual se llevó a cabo el acuerdo para el atentado</strong>&nbsp;y también pudo haber sido el emisario que consiguió la labor del sicario. 'Popeye' es el conducto a través del cual se lleva la orden del asesinato del periodista”.</p>
                        <p>“Sobre alias <strong>Popeye</strong>&nbsp;hay indicios que darían cuenta de su participación en una reunión en la que los cabecillas del Cartel de Medellín, entre ellos<strong> Pablo Escobar</strong>, concertaron atentar contra <strong>Guillermo Cano Isaza </strong>por sus publicaciones contra la organización narcotraficante y definieron la forma y quiénes ejecutarían el crimen”, señaló la Fiscalía.</p>
                        <p>En relación con <strong>Gustavo Adolfo Gutiérrez Arrubla</strong>, alias Maxwell, señalado como uno de los hombres de confianza de Pablo Escobar, la Fiscalía General indicó que, supuestamente,&nbsp;<strong>hizo las labores de inteligencia en Bogotá e identificó los movimientos y rutinas del periodista.&nbsp;</strong></p>
                        <p>De acuerdo con la Fiscalía,&nbsp;<strong>la información suministrada por 'Maxwell'</strong>&nbsp;habría terminado en manos del grupo de sicarios que asesinó al periodista mientras se movilizaba del trabajo a su residencia.</p>
                        <p><strong>Lea también:&nbsp;<a href="https://www.rcnradio.com/judicial/se-inicio-el-juicio-contra-alias-popeye-por-amenazas-contra-petro" hrefLang="es" rel="nofollow" target="_blank">Se inició el juicio contra alias Popeye por amenazas contra Petro</a></strong></p>
                        <p>No obstante, la Fiscalía dictó medida de aseguramiento no privativa de la libertad contra <strong>alias Maxwell</strong>&nbsp;y advirtió&nbsp;<strong>que deberá hacer presentaciones periódicas</strong>&nbsp;ante la autoridad competente.&nbsp;Se le prohíbe salir del país&nbsp;y se le exige&nbsp;mantener buena conducta individual, familiar y social.&nbsp;No tener contacto ni comunicación con las víctimas&nbsp;y pagar una caución equivalente a <strong>diez salarios mínimos legales mensuales</strong> vigentes.</p>
                        <p><strong>Guillermo Cano Isaza </strong>fue asesinado por orden de Pablo Escobar&nbsp;<strong>cuando salía de la sede del&nbsp;periódico</strong>&nbsp;ubicado&nbsp;en el occidente de Bogotá.&nbsp;</p>
                        <p>El periodista había revelado<strong>&nbsp;en una de sus columnas que&nbsp;Escobar había estado privado de su libertad&nbsp;</strong>por delitos relacionados con el naroctráfico. Esta revelación hizo que perdiera su curul en el Congreso de la República. Igualmente, Cano reveló los negocios ilegales que&nbsp;<strong>tenía Escobar en el departamento de Antioquia,&nbsp;</strong>donde se presentaba como un empresario.&nbsp;</p>
                        <p>En la actualidad, 'Popeye' se encuentra privado de su libertad en la cárcel de máxima seguridad de Valledupar enfrentando un proceso por los delitos de extorsión y amenaza.</p>
                     */}</Grid>
                </Grid>
            </div>
        </Container>
    );
}

export default withStyles(styles)(MediaQuery);
