import { SimpleForm, Edit, TextInput, required, ReferenceInput, BooleanInput, NumberInput } from 'react-admin'

export const ChallengeOptionEdit = () => {
    return (
        <Edit>
            <SimpleForm>
                <NumberInput source='id' validate={[required()]} label='Id' />
                <TextInput source='text' validate={[required()]} label='Text' />
                <BooleanInput source='correct' label='Correct option' />
                <ReferenceInput source='challengeId' reference='challenges' />
                <TextInput source='imageSrc' label='Image URL' />
                <TextInput source='audioSrc' label='audio URL' />
            </SimpleForm>
        </Edit>
    )
}