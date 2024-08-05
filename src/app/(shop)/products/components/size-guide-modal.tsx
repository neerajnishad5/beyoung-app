import { Modal, useModal, Button, Text } from '@nextui-org/react';

const SizeGuideModal = () => {
  const { setVisible, bindings } = useModal();

  return (
    <div>
      <Button auto flat color="primary" onClick={() => setVisible(true)}>
        Size Guide >
      </Button>
      <Modal
        scroll
        fullScreen
        closeButton
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings}
        className="top-0 right-0 w-full max-w-md bg-white border-l border-gray-300"
      >
        <Modal.Header>
          <Text id="modal-title" size={18} className="font-bold">
            SIZE GUIDE
          </Text>
        </Modal.Header>
        <Modal.Body>
          <div className="p-4">
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="border-b py-2">Size</th>
                  <th className="border-b py-2">CHEST</th>
                  <th className="border-b py-2">LENGTH</th>
                  <th className="border-b py-2">SHOULDER</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b py-2">S-38</td>
                  <td className="border-b py-2">40</td>
                  <td className="border-b py-2">28</td>
                  <td className="border-b py-2">17</td>
                </tr>
                <tr>
                  <td className="border-b py-2">M-40</td>
                  <td className="border-b py-2">42</td>
                  <td className="border-b py-2">29</td>
                  <td className="border-b py-2">18</td>
                </tr>
                <tr>
                  <td className="border-b py-2">L-42</td>
                  <td className="border-b py-2">44</td>
                  <td className="border-b py-2">29.5</td>
                  <td className="border-b py-2">19</td>
                </tr>
                <tr>
                  <td className="border-b py-2">XL-44</td>
                  <td className="border-b py-2">46</td>
                  <td className="border-b py-2">30</td>
                  <td className="border-b py-2">20</td>
                </tr>
                <tr>
                  <td className="border-b py-2">2XL-46</td>
                  <td className="border-b py-2">48</td>
                  <td className="border-b py-2">30.5</td>
                  <td className="border-b py-2">21</td>
                </tr>
              </tbody>
            </table>
            <div className="mt-4">
              <h3 className="text-lg font-bold">How To Measure:</h3>
              <p className="mt-2">Not sure about shirt size? Follow the below instructions:</p>
              <ul className="list-disc list-inside">
                <li>Keep your body relaxed to get precise dimensions.</li>
                <li>Chest: Measure from under arms around the chest.</li>
                <li>Length: Measure from highest point of the shoulder to bottom edge.</li>
                <li>Sleeve: Measure from the shoulder to the wrist.</li>
                <li>P.S. Our shirt(s) are Regular Fit - not too tight, not too loose.</li>
                <li>Sizes may vary by +/- 0.5 Inches</li>
              </ul>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SizeGuideModal;
