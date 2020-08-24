import React, { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import BookOutlinedIcon from '@material-ui/icons/BookOutlined';
import Fade from '@material-ui/core/Fade';
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';


const References = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const useStyles = makeStyles(theme => ({

        main: {
            paddingTop: '5%',
        },

        paper: {
            width: '100%',
            height: 'fit-content',
        },

        content: {
            width: '100%',
        },

        item: {
            display: 'flex',
            justifyContent: 'center',
        },

        source: {
            marginLeft: '1rem',
        },

        title: {
            marginLeft: '1rem'
        },
    }));

    const classes = useStyles();

    return (
        <Fade in={true} timeout={1000}>
            <Container className={classes.main} justify="true" role="main">
                <h1>Quellen und Literatur</h1>
                <Grid container spacing={6}>
                    <Grid className={classes.item} item xs={12} md={6} >
                        <Paper elevation={3} className={classes.paper}>
                            <Typography component={'span'} className={classes.content}>
                                <Typography variant="h5" variantMapping={{h5: 'h2'}} className={classes.title}>
                                    Quellen
                            </Typography>
                                <List className={classes.list}>
                                    <ListItem>
                                        <BookOutlinedIcon aria-hidden="true" /><Typography variant="subtitle1" variantMapping={{subtitle1: 'h3'}}  className={classes.source}>Albrecht, Herbert: Kunst im Stadtbild soll von allen verstanden werden, in: Bremer Nachrichten vom 16.6.1976. (BUA, 2/Press-Nr. 972)</Typography>
                                    </ListItem>
                                    <ListItem>
                                        <BookOutlinedIcon aria-hidden="true" /><Typography variant="subtitle1" variantMapping={{subtitle1: 'h3'}} className={classes.source}>Beschluss des Konvents zur Chile-Hilfe, 4. Sitzung vom 22.11.1973 (BUA, 1/KONV-Nr. 5)</Typography>
                                    </ListItem>
                                    <ListItem>
                                        <BookOutlinedIcon aria-hidden="true" /><Typography variant="subtitle1" variantMapping={{subtitle1: 'h3'}} className={classes.source}>Flugblatt asta-aktuell „Von einem der Auszug das Fürchten zu lehren” vom 26.10.1978, (BUA, 7/F, STUD.1-Nr. 158)</Typography>
                                    </ListItem>
                                    <ListItem>
                                        <BookOutlinedIcon aria-hidden="true" /><Typography variant="subtitle1" variantMapping={{subtitle1: 'h3'}} className={classes.source}>„Murales” an der Universität Bremen. Exilchilenen malten ihre gesellschaftskritischen Bilder, in: Badische Neueste Nachricht vom 28.6.1976 (BUA, 2/Press-Nr. 972)</Typography>                                    </ListItem>
                                    <ListItem>
                                        <BookOutlinedIcon aria-hidden="true" /><Typography variant="subtitle1" variantMapping={{subtitle1: 'h3'}} className={classes.source}>Protokoll des Akademischen Senats vom 7.6.1974 und Anlage 19/6 (BUA, 1/AS-Nr. 136c)</Typography>
                                    </ListItem>
                                    <ListItem>
                                        <BookOutlinedIcon aria-hidden="true" /><Typography variant="subtitle1" variantMapping={{subtitle1: 'h3'}} className={classes.source}>Weisser, Michael: Informationen zur Ausstellung „Kunst im Stadtbild”. Bremen 8.6.1976 (BUA, 2/Press-Nr. 972)</Typography>
                                    </ListItem>
                                    <ListItem>
                                        <BookOutlinedIcon aria-hidden="true" /><Typography variant="subtitle1" variantMapping={{subtitle1: 'h3'}} className={classes.source}>Fotografien Fotosammlung (BUA, 7/B)</Typography>
                                    </ListItem>
                                </List>
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid className={classes.item} item xs={12} md={6} >
                        <Paper elevation={3} className={classes.paper}>
                            <Typography component={'span'} className={classes.content}>
                                <Typography variant="h5" variantMapping={{h5: 'h3'}}  className={classes.title}>
                                    Literatur
                            </Typography>
                                <List className={classes.list}>
                                    <ListItem>
                                    <MenuBookOutlinedIcon aria-hidden="true" /><Typography variant="subtitle1" variantMapping={{subtitle1: 'h3'}} className={classes.source}>Chile heute - historische und wirtschaftliche Hintergründe. Ausstellungskatalog. Hrsg.: Übersee-Museum Bremen. Bremen 1977</Typography>
                                    </ListItem>
                                    <ListItem >
                                    <MenuBookOutlinedIcon aria-hidden="true" /><Typography variant="subtitle1" variantMapping={{subtitle1: 'h3'}} className={classes.source}>Kunst im öffentlichen Raum in Bremen. Die Entwicklung eines Programms. Dokumentation 1977–1980. Bearb. von Hans-Joachim Manske. Bremen 1980</Typography>
                                    </ListItem>
                                    <ListItem >
                                    <MenuBookOutlinedIcon aria-hidden="true" /><Typography variant="subtitle1" variantMapping={{subtitle1: 'h3'}} className={classes.source}>Kunst im öffentlichen Raum in Bremen 1973-1993. Hg. von Hans-Joachim Manske und Dieter Opper. Lilienthal 1993</Typography>
                                    </ListItem>
                                    <ListItem >
                                    <MenuBookOutlinedIcon aria-hidden="true" /><Typography variant="subtitle1" variantMapping={{subtitle1: 'h3'}} className={classes.source}>Kunst im Stadtbild. Von „Kunst am Bau” zu „Kunst im öffentlichen Raum”. Katalog zur gleichnamigen Ausstellung der Uni Bremen vom 8. bis 30. Juni 1976. Hrsg. von Sunke Herlyn u.a. Bremen 1976</Typography>
                                    </ListItem>
                                    <ListItem >
                                    <MenuBookOutlinedIcon aria-hidden="true" /><Typography variant="subtitle1" variantMapping={{subtitle1: 'h3'}} className={classes.source}>Duderstadt, Matthias: Der Garten der Lüste in der Universität (mit Frieder Schellhase), in: Kunst und Unterricht Nr.51, Oktober 1978</Typography>
                                    </ListItem>
                                    <ListItem >
                                    <MenuBookOutlinedIcon aria-hidden="true" /><Typography variant="subtitle1" variantMapping={{subtitle1: 'h3'}} className={classes.source}>Matthies, Klaus: Zugang nur durch die Wand. Wandmalerei in der Universität Bremen, in: Impulse, Oktober 1989, Nr. 8</Typography>
                                    </ListItem>
                                    <ListItem >
                                    <MenuBookOutlinedIcon aria-hidden="true" /><Typography variant="subtitle1" variantMapping={{subtitle1: 'h3'}} className={classes.source}>Mielsch, Beate: Kunst im Bremer Stadtbild. Ein Führer zu den öffentlichen Kunstwerken in der Freien Hansestadt Bremen. Bremen 1984</Typography>
                                    </ListItem>
                                    <ListItem >
                                    <MenuBookOutlinedIcon aria-hidden="true" /><Typography variant="subtitle1" variantMapping={{subtitle1: 'h3'}} className={classes.source}>Müller, Horst: Observations Corquis. Begleitbuch zu einer Ausstellung im Kunstverein Ruhr, Essen 2004. Edition Patois 2004</Typography>
                                    </ListItem>
                                    <ListItem >
                                    <MenuBookOutlinedIcon aria-hidden="true" /><Typography variant="subtitle1" variantMapping={{subtitle1: 'h3'}} className={classes.source}>Nipp, Manfred: Zum Projekt „7 Thore“. Erklärende Anmerkungen zu 21 Metalltafeln und 21 Drucken, Bremen März 1989</Typography>
                                    </ListItem>
                                    <ListItem >
                                    <MenuBookOutlinedIcon aria-hidden="true" /><Typography variant="subtitle1" variantMapping={{subtitle1: 'h3'}} className={classes.source}>Rügge, Natascha: Das Wandbild "Terror und Widerstand in Chile" der Brigada Luis Corvalán auf dem Campus der Universität Bremen aus dem Jahr 1976, in: Geschichte im öffentlichen Raum. Hg. von Wiltrud Ulrike Drechsel. Bremen 2011, S. 139-189.</Typography>
                                    </ListItem>
                                    <ListItem >
                                    <MenuBookOutlinedIcon aria-hidden="true" /><Typography variant="subtitle1" variantMapping={{subtitle1: 'h3'}} className={classes.source}>Schmitz, Wolfgang: Ein positives Beispiel, in Kultur und Gesellschaft, 10 (1996)</Typography>
                                    </ListItem>
                                    <ListItem >
                                    <MenuBookOutlinedIcon aria-hidden="true" /><Typography variant="subtitle1" variantMapping={{subtitle1: 'h3'}} className={classes.source}>Ders.: Die ersten murales, in: Bremen - Bild Special, (1976)</Typography>
                                    </ListItem>
                                    <ListItem >
                                    <MenuBookOutlinedIcon aria-hidden="true" /><Typography variant="subtitle1" variantMapping={{subtitle1: 'h3'}} className={classes.source}>Stöbener, Nicole: Kunst im öffentlichen Raum Universität, in: BUS Nr. 65, November 2001 (01.03.2007)</Typography>
                                    </ListItem>
                                </List>
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Fade>
    );
}

export default References;