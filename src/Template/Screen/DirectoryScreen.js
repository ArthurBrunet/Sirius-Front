import Apero from '../Component/apero';
import CustomCard from '../Component/CustomCard';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Title from "../Component/Title";

export function DirectoryScreen() {
    return (
        <>
            <Title title={'Annuaire'}/>
            <div className={'filterList'}>
                <Autocomplete
                    className={'list'}
                    multiple
                    limitTags={2}
                    id="multiple-limit-tags"
                    options={nom}
                    getOptionLabel={(option) => option.title}
                    renderInput={(params) => (
                        <TextField {...params} label="Entreprises"/>
                    )}
                />

                <Autocomplete
                    className={'list'}
                    multiple
                    limitTags={2}
                    id="multiple-limit-tags"
                    options={type}
                    getOptionLabel={(option) => option.title}
                    renderInput={(params) => (
                        <TextField {...params} label="Type d'entreprise"/>
                    )}
                />

                <Autocomplete
                    className={'list'}
                    multiple
                    limitTags={2}
                    id="multiple-limit-tags"
                    options={competence}
                    getOptionLabel={(option) => option.title}
                    renderInput={(params) => (
                        <TextField {...params} label="Compétences"/>
                    )}
                />
            </div>

            <div class="cards">
                <CustomCard/>
                <CustomCard/>
                <CustomCard/>
                <CustomCard/>
                <CustomCard/>
                <CustomCard/>
                <CustomCard/>
                <CustomCard/>
                <CustomCard/>
                <CustomCard/>
                <CustomCard/>
                <CustomCard/>
                <CustomCard/>
            </div>
            <Apero/>
        </>
    );
}

const nom = [
    {title: 'example 1'},
    {title: 'example 2'},
    {title: 'example 3'},
]

const type = [
    {title: 'example 1'},
    {title: 'example 2'},
    {title: 'example 3'},
]

const competence = [
    {title: 'example 1'},
    {title: 'example 2'},
    {title: 'example 3'},
]
