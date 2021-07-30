import { Devices } from '../db/models';


class Device {

    static async createDevice(req, res) {

        try {
            const { deviceId } = req.query;
           
            const newDevice = {
                deviceId
            };

            const devices = await Devices.create(newDevice);
            return res.status(201).json({
                message: 'Created successfully',
                devices
            })
        } catch (error) {
            return res.status(500).json({
                error: 'Something went wrong',
                error
            })
        }
    }

}

export default Device;