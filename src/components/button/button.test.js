import Button, {BUTTON_TYPE_CLASSES} from "./button";
import renderer from 'react-test-renderer'



it('button renders correctly', () => {
    const button = renderer
        .create(<Button isLoading={true}></Button>)
    expect(button).toMatchSnapshot();
});