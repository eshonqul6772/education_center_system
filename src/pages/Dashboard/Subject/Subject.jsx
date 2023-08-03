import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Modal, Table } from 'antd'
import { MdDelete, MdModeEdit } from 'react-icons/md'


import Button from 'components/Button/Button'
import getSubject from 'services/subject.service'
import AddSubject from './AddSubject'
import '../Group/Group.scss'

function Subject() {

	const navigate = useNavigate('')

	const [subject, setSubject] = useState([

	])
	const [isModalOpen, setIsModalOpen] = useState(false)

	const showModal = () => {
		setIsModalOpen(true)
	}
	const handleOk = () => {
		setIsModalOpen(false)
	}
	const handleCancel = () => {
		setIsModalOpen(false)
	}

	useEffect(() => {
		getSubject
			.getAll()
			.then((res) => {
				setSubject(res.data)
			})
			.catch((err) => {
				console.log(err)
			})
	}, [])

	const hendelDelet = (id) => {
		getSubject
			.remove(id)
			.then((res) => {
				setSubject(subject.filter((element) => element.id !== id))
			})
			.catch((err) => {
				console.log(err)
			})
		handleCancel()
	}

	



	return (
		<>
			<div className='table__box'>

				<Table
					pagination={{ className: "pagination", defaultPageSize: 7 }}
					columns={[
						{
							title: 'subject',
							dataIndex: 'subject',
							key: 'subject',
							width: true,
							render: text => <a>{text}</a>,
						},
						{
							title: <>
								<sapn className='operation' style={{ display: "flex", justifyContent: "flexEnd" }}>operation</sapn>
							</>,
							dataIndex: 'operation',
							key: 'operation',
							width: true,
						}

					]} dataSource={subject.map((e) => (

						{
							key: e.name,
							subject: e.name,
							operation: <>
								<div className='d-flex align-items-center justify-content-end gap-3'>
									<button
										onClick={() => navigate(`/subject/${e.id}`)}
										className='edit__btn'
									>
										<MdModeEdit />
									</button>
									<Modal
										footer={null}
										title='You want to delete this user'
										open={isModalOpen}
										onOk={handleOk}
										onCancel={handleCancel}
									>
										<div className='d-flex justify-content-end gap-4 mt-4'>
											<Button title='cancel' variant='neutral' onClick={handleCancel} />
											<Button
												title='delete'
												variant='danger-delete'
												onClick={() => hendelDelet(e.id)}
											/>
										</div>
									</Modal>
									<Button variant="danger" title={<MdDelete size='25px' />} onClick={showModal} className='delet__btn' />

								</div>
							</>
						}

					))} />
				<div>
					<AddSubject />
				</div>
			</div>
		</>
	)
}

export default Subject
