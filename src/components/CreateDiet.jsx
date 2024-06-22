// React kütüphanesini ve gerekli fonksiyonları import ediyoruz
import React, { useState, useContext } from 'react';

// useNavigate fonksiyonunu react-router-dom kütüphanesinden import ediyoruz
import { useNavigate } from 'react-router-dom';

// Ant Design kütüphanesinden bazı bileşenleri import ediyoruz
import { Button, Form, Input, InputNumber, Upload, message } from 'antd';

// Upload butonu için Ant Design ikonunu import ediyoruz
import { UploadOutlined } from '@ant-design/icons';

// Diyetler bağlamını (context) import ediyoruz
import { DietsContext } from '../contexts/DietsContext';

// Input bileşeninden TextArea bileşenini çıkartıyoruz
const { TextArea } = Input;

// CreateDiet adlı bileşeni tanımlıyoruz
const CreateDiet = () => {
  // Yönlendirme fonksiyonunu kullanmak için useNavigate hook'unu çağırıyoruz
  const navigate = useNavigate();

  // Dosya listesini yönetmek için useState hook'unu kullanıyoruz
  const [fileList, setFileList] = useState([]);

  // Diyetler bağlamını (context) kullanarak diets ve setDiets değerlerini alıyoruz
  const { diets, setDiets } = useContext(DietsContext);

  // Form gönderildiğinde çalışacak olan fonksiyonu tanımlıyoruz
  const onFinish = (values) => {
    // Yeni bir FormData nesnesi oluşturuyoruz
    const formData = new FormData();

    // Form verilerini FormData nesnesine ekliyoruz
    formData.append('title', values.title);
    formData.append('description', values.description);
    formData.append('detailed_description', values.detailed_description);  // Yeni alan
    formData.append('time', values.time);
    formData.append('difficulty', values.difficulty);

    // Eğer dosya listesi boş değilse, ilk dosyayı FormData nesnesine ekliyoruz
    if (fileList.length > 0) {
      formData.append('image', fileList[0].originFileObj);
    }

    // Diyet planını kaydetmek için bir API isteği gönderiyoruz
    fetch('http://localhost:8000/api/diets/', {
      method: 'POST', // HTTP POST yöntemi kullanılıyor
      body: formData, // Form verileri istek gövdesine ekleniyor
    })
      .then(response => {
        // Eğer cevap başarılı değilse hata fırlatıyoruz
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // Cevabı JSON formatında döndürüyoruz
        return response.json();
      })
      .then(data => {
        // Yeni diyet planını mevcut diyetler listesine ekliyoruz
        setDiets([...diets, data]);
        // Başarılı mesajı gösteriyoruz
        message.success('Diyet Planı başarıyla kaydedildi!');
        // Diyet planları sayfasına yönlendiriyoruz
        navigate('/diet-plans');
      })
      .catch(error => {
        // Hata oluşursa hatayı konsola yazdırıyoruz ve hata mesajı gösteriyoruz
        console.error('Error:', error);
        message.error('Diyet Planı kaydedilirken bir hata oluştu.');
      });
  };

  // Form gönderme başarısız olduğunda çalışacak fonksiyonu tanımlıyoruz
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo); // Hata bilgilerini konsola yazdırıyoruz
  };

  // Dosya değiştiğinde çalışacak fonksiyonu tanımlıyoruz
  const handleFileChange = ({ fileList }) => setFileList(fileList); // Dosya listesini güncelliyoruz

  // Bileşenin render edileceği JSX yapısını döndürüyoruz
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Sayfa başlığını belirliyoruz */}
      <h2 className="text-4xl font-bold mb-4">Diyet Planı Ekle</h2>
      {/* Ant Design form bileşenini oluşturuyoruz */}
      <Form
        name="create-diet"
        layout="vertical" // Dikey düzen kullanıyoruz
        onFinish={onFinish} // Form başarıyla gönderildiğinde çalışacak fonksiyon
        onFinishFailed={onFinishFailed} // Form gönderme başarısız olduğunda çalışacak fonksiyon
      >
        {/* Diyet planı başlığı için form alanı */}
        <Form.Item
          label="Diyet Planı Başlığı"
          name="title"
          rules={[{ required: true, message: 'Lütfen diyet planı başlığı girin!' }]} // Zorunlu alan kuralları
        >
          <Input /> {/* Başlık girişi için input alanı */}
        </Form.Item>

        {/* Diyet planı açıklaması için form alanı */}
        <Form.Item
          label="Açıklama"
          name="description"
          rules={[{ required: true, message: 'Lütfen diyet planı açıklaması girin!' }]} // Zorunlu alan kuralları
        >
          <TextArea rows={4} /> {/* Açıklama girişi için çok satırlı text alanı */}
        </Form.Item>

        {/* Detaylı diyet planı açıklaması için form alanı */}
        <Form.Item
          label="Detaylı Açıklama"
          name="detailed_description"
          rules={[{ required: true, message: 'Lütfen detaylı diyet planı açıklaması girin!' }]} // Zorunlu alan kuralları
        >
          <TextArea rows={4} /> {/* Detaylı açıklama girişi için çok satırlı text alanı */}
        </Form.Item>

        {/* Pişirme süresi için form alanı */}
        <Form.Item
          label="Pişirme Süresi (Dakika)"
          name="time"
          rules={[{ required: true, message: 'Lütfen pişirme süresini girin!' }]} // Zorunlu alan kuralları
        >
          <InputNumber min={1} /> {/* Süre girişi için sayı input alanı */}
        </Form.Item>

        {/* Zorluk seviyesi için form alanı */}
        <Form.Item
          label="Zorluk Seviyesi"
          name="difficulty"
          rules={[{ required: true, message: 'Lütfen zorluk seviyesini girin!' }]} // Zorunlu alan kuralları
        >
          <Input /> {/* Zorluk seviyesi girişi için input alanı */}
        </Form.Item>

        {/* Resim yükleme için form alanı */}
        <Form.Item
          label="Resim Yükle"
          name="image"
        >
          <Upload
            listType="picture" // Resim tipi yükleme listesi
            fileList={fileList} // Yüklenen dosya listesini belirtiyoruz
            onChange={handleFileChange} // Dosya değişikliğinde çalışacak fonksiyon
            beforeUpload={() => false} // Otomatik yüklemeyi engelliyoruz
          >
            <Button icon={<UploadOutlined />}>Resim Yükle</Button> {/* Resim yükleme butonu */}
          </Upload>
        </Form.Item>

        {/* Kaydet butonu */}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Kaydet
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

// Bileşeni dışa aktarıyoruz
export default CreateDiet;
