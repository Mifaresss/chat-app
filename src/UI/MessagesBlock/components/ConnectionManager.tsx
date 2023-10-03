import { Button } from '@/UI/Button/Button'
import { socket } from '@/api/socket'

export function ConnectionManager() {
	function connect() {
		socket.connect()
	}

	function disconnect() {
		socket.disconnect()
	}

	return (
		<>
			<Button onClick={connect} title='Connect' />
			<Button onClick={disconnect} title='Disconnect' />
		</>
	)
}
