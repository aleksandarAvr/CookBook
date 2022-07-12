import styles from './RecipeCuisine.module.css';

const RecipeCuisine = (props) => {

    return (
        <label htmlFor="cuisine">
            Select cuisine
            <select name="cuisine">
                <option value="Moroccan">Moroccan</option>
                <option value="Mexican">Mexican</option>
                <option value="Spanish">Spanish</option>
                <option value="Chinese">Chinese</option>
                <option value="Japanese">Japanese</option>
                <option value="Indian">Indian</option>
                <option value="American">American</option>
                <option value="Turkish">Turkish</option>
                <option value="Thai">Thai</option>
                <option value="French">French</option>
                <option value="Italian">Italian</option>
            </select>
        </label>
    );
};

export default RecipeCuisine;