import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import UserForm from './UserForm';


test('its shows two inputs and a button',()=>{
    // render the componet
render(<UserForm/>)
    //Manipulate the component or find an element in it
    const button = screen.getByRole('button');
    const inputs=screen.getAllByRole('textbox');
   
    
    //assertion--make sure  compnent is doing


    //what we expect it to do
    expect(inputs).toHaveLength(2);
    expect(button).toBeInTheDocument();
});


test('it calls onUserAdd when the form is submitted',()=>{
const mock= jest.fn();
   
    ///Try to render my component
render(<UserForm onUserAdd={mock}/>);
    //Find the two inputs
    const nameInput=screen.getByRole('textbox',{
        name:/name/i
    })
    const emailInput=screen.getByRole('textbox',{
        name:/email/i
    })
    
    //Simulate typing in a name
    user.click(nameInput);
    user.keyboard('jane');
    //Simulate typing in an email
    user.click(emailInput);
    user.keyboard('janecc.com');
    //Find the button
    const button=screen.getByRole('button');
    //Simpulate clicking the button
    user.click(button);
    //Assertion to make sure 'onUserAdd' gets called with email/name
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledWith({name:'jane',email:'janecc.com'})
})
test('emties the two inputs when from is submitted', () => { 
    render(<UserForm onUserAdd={()=>{}}/>);

    const nameInput=screen.getByRole('textbox',{
        name:/name/i
    })
    const emailInput=screen.getByRole('textbox',{
        name:/email/i
    })
    const button = screen.getByRole('button');
    //Simulate typing in a name
    user.click(nameInput);
    user.keyboard('jane');
    //Simulate typing in an email
    user.click(emailInput);
    user.keyboard('janecc.com');
    user.click(button);
    expect(nameInput).toHaveValue('');
    expect(emailInput).toHaveValue('');

 })