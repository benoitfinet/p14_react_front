import './createEmployee.scss';
import { useDispatch } from "react-redux";
import { validate } from '../../features/createEmployee';
import { useState } from 'react';
import states from '../../assets/datas/states.json';
import departments from '../../assets/datas/department.json';
import Header from '../../components/Header/Header';
import Modal from 'modal-library-ocrbfp14/dist/Modal';

function CreateEmployee() {
    const formReset = document.getElementById('form');
    const dispatch = useDispatch();
    const [firstNameInput, setFirstNameInput] = useState('');
    const [lastNameInput, setLastNameInput] = useState('');
    const [streetInput, setStreetInput] = useState('');
    const [cityInput, setCityInput] = useState('');
    const [zipCodeInput, setZipCodeInput] = useState('');
    const [valueStateSelect, setValueStateSelect] = useState('');
    const [valueDepartmentSelect, setValueDepartmentSelect] = useState('');
    const [startDateInput, setStartDateInput] = useState('');
    const [birthDateInput, setBirthDateInput] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false)

    function openModal() {
        setIsModalOpen(true);
    }

    function closeModal(e) {
        e.preventDefault();
        setIsModalOpen(false);
    }

    const handleSubmitForm = e => {
        e.preventDefault();
        dispatch(validate({
            firstNameInput,
            lastNameInput,
            streetInput,
            cityInput,
            valueStateSelect,
            valueDepartmentSelect,
            zipCodeInput,
            startDateInput,
            birthDateInput,
        }))
        if (firstNameInput !== "") {
            formReset.reset()
        }
        openModal()
    }

    return (
        <div>
            <Header goTo='View Current Employees' page='Create Employee' link='/employee-list' />
            <div className='mainPage'>
                <form id='form' onSubmit={handleSubmitForm}>
                    <div className='mainPage__form'>
                        <fieldset className="mainPage__form--fieldset">
                            <legend>General informations</legend>
                            <label>
                                First Name
                            </label>
                            <input type="text" name="First Name" placeholder='First Name' className='input' onChange={e => setFirstNameInput(e.target.value)}></input>
                            <label>
                                Last Name
                            </label>
                            <input type="text" name="Last Name" placeholder='Last Name' className='input' onChange={e => setLastNameInput(e.target.value)}></input>
                            <label htmlFor='Date of Birth'>
                                Date of Birth
                            </label>
                            <input
                                type="date"
                                name="Date of Birth"
                                className='input'
                                onChange={e => setBirthDateInput(e.target.value)}
                            ></input>
                            <label htmlFor='Start Date'>
                                Start Date
                            </label>
                            <input
                                type="date"
                                name="Start Date"
                                className='input'
                                onChange={e => setStartDateInput(e.target.value)}
                            ></input>
                        </fieldset>
                        <fieldset className="mainPage__form--fieldset">
                            <legend>Address</legend>
                            <label>
                                Street
                            </label>
                            <input type="text" name="Street" placeholder='Street' className='input' onChange={e => setStreetInput(e.target.value)}></input>
                            <label>
                                City
                            </label>
                            <input type="text" name="City" placeholder='City' className='input' onChange={e => setCityInput(e.target.value)}></input>
                            <label>
                                State
                            </label>
                            <select
                                name='states'
                                options={states}
                                value={valueStateSelect}
                                onChange={e => setValueStateSelect(e.target.value)}
                                className='input'
                            >
                                <option value="">--Please choose a state--</option>
                                {states.map((state) => {
                                    return <option key={state.stateID}>
                                        {state.stateName}
                                    </option>
                                })}
                            </select>
                            <label>
                                Zip Code
                            </label>
                            <input type="number" name="zipcode" placeholder='Zip Code' className='input' onChange={e => setZipCodeInput(e.target.value)}></input>
                        </fieldset>
                        <fieldset className="mainPage__form--fieldset">
                            <legend>Department</legend>
                            <select
                                name='department'
                                options={departments}
                                value={valueDepartmentSelect}
                                onChange={e => setValueDepartmentSelect(e.target.value)}
                                className='input'
                            >
                                <option value="">--Please choose a department--</option>
                                {departments.map((department) => {
                                    return <option key={department.departmentID}>
                                        {department.departmentName}
                                    </option>
                                })}
                            </select>
                        </fieldset>
                    </div>
                    <div className='submitButton'>
                        <input
                            type='submit'
                            value="Save"
                            className='submitButton__style'
                        >
                        </input>
                        <Modal
                            isOpen={isModalOpen}
                            closeModal={closeModal}
                            buttonCloseName='Close'
                            InsertText='Employee Created !'
                        ></Modal>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateEmployee