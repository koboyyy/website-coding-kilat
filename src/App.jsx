import { useState } from 'react'
import radialGradiasi from './assets/radial_gradiasi.png'

function Navbar() {
	return (
		<div className='flex items-center w-full text-white py-6 relative'>
			<div className='grow'>
				<h1 className='font-bold text-[24px]'>Coding Kilat</h1>
			</div>
			<div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center gap-8 text-[14px] border border-[rgb(0,102,255,0.3)] rounded-[24px] px-6 py-[10px]'>
				<a href="/">Beranda</a>
				{/* <a href="#">Testimoni</a> */}
				<a href="https://wa.me/6282289056369">Kontak</a>
				<a href="#faq">Faq</a>
			</div>
			<div className='flex gap-2 grow justify-end'>
				<a href='https://wa.me/6282289056369' className='p-[10px] bg-[#0066FF] border border-[rgb(0,102,255,0.3)] rounded-[8px]'>Order</a>
			</div>
		</div>
	)
}

function Hero() {
	return (
		<div className='w-full text-center py-30'>
			<h1 className='text-[48px] font-bold'>
				Coding Tanpa Pusing
			</h1>

			<p className='text-[14px] w-140 mx-auto'>
				Jasa joki koding paling transparan dengan harga yang pas di dompet mahasiswa. Bebas revisi sampai program jalan dan privasi identitasmu terjaga 100%.
			</p>

			<div className='flex gap-4 justify-center mt-10'>
				<a href='https://wa.me/6282289056369' className='p-[10px] bg-[#0066FF] border border-[rgb(0,102,255,0.3)] rounded-[8px]'>Order</a>
				<a href='https://wa.me/6282289056369' className='p-[10px] border border-[#0066FF] rounded-[8px]'>Whatsapp</a>
			</div>
		</div>
	)
}

function Card({ children }) {
	return (
		<div className='flex flex-col flex-1 min-w-[300px] max-w-full px-[37px] py-[32px] rounded-[16px] bg-[linear-gradient(0deg,#003D99_0%,rgba(0,42,104,0)_25%,rgba(0,53,132,0)_75%,#003D99_100%)] border border-[rgb(0,61,153,0.3)]'>
			{children}
		</div>
	)
}

function PriceList({ tipe, harga, keterangan }) {
	return (
		<div className='flex gap-2 flex-col h-full'>
			<div className='text-[20px]'>{tipe}</div>
			<div className='text-[32px] font-bold'>{harga}</div>
			<div>
				<div className='font-semibold'>Contoh Proyek:</div>
				<ul className="list-disc ml-6">
					{Array.isArray(keterangan) ? (
						keterangan.map((item, idx) => <li key={idx}>{item}</li>)
					) : (
						<li>{keterangan}</li>
					)}
				</ul>
			</div>
		</div>
	)
}

function Faq({ pertanyaan, jawaban }) {
	return (
		<div className='space-y-4'>
			<h2 className='text-[16px] font-semibold'>{pertanyaan}</h2>
			<p className='text-[14px]'>{jawaban}</p>
		</div>
	)
}

function Footer() {
	return (
		<div className='flex justify-between border-t border-[rgb(0,102,255,0.3)] py-[48px] items-center mt-20'>
			<div className='flex flex-col gap-4'>
				<h1 className='text-[36px] font-medium'>Coding Kilat</h1>
				<span className='text-[16px] font-medium'>@2026</span>
			</div>
			<div className='flex flex-col gap-2 text-[16px]'>
				<span>@joki_coding_kilat</span>
				<span>+62-822-8905-6369</span>
			</div>
		</div>
	)
}

function App() {
	return (
		<>
			<Navbar />
			<Hero />

			{/* Background Gradient */}
			<div className="absolute -z-100 w-full -top-25 left-0">
				<img src={radialGradiasi} alt="radial gradiasi" className="w-full h-full object-cover object-center" />
			</div>

			{/* Price List */}
			<div className='w-fit mx-auto flex gap-6 mb-20'>
				<Card>
					<PriceList
						tipe="Basic"
						harga="Rp.50.000++"
						keterangan={[
							"Landing Page Sederhana",
							"Portofolio Pribadi (Statis)",
							"Halaman Undangan Digital",
							"Link in Bio Custom",
						]}
					/>
				</Card>
				<Card>
					<PriceList
						tipe="Standar"
						harga="Rp.150.000++"
						keterangan={[
							"Profil Bisnis (Company Profil)",
							"Sistem CRUD Sederhana",
							"Website Portofolio dengan Galeri",
							"Web Informasi Sekolah/Organisasi",
						]}
					/>
				</Card>
				<Card>
					<PriceList
						tipe="Premium"
						harga="Rp.300.000++"
						keterangan={[
							"Web Toko Online",
							"Aplikasi Kasir",
							"Aplikasi Kustom",
							"Web Dashboard/Admin",
						]}
					/>
				</Card>
			</div>

			{/* Faq */}
			<div id='faq' className='flex justify-between gap-40'>
				<div className='w-full'>
					<h1 className='font-medium text-[48px]'>Masih Bingung ? Tenang, kami siap membantu mu</h1>
					<p className='text-[20px]'>jika ada pertanyaan lain yang belum ada di sini boleh tanyakan dan konsultasikan langsung dengan costumer service kami</p>
				</div>

				<div className='space-y-5 w-full'>
					<Card>
						<Faq pertanyaan="Berapa lama proyek dikerjakan?" jawaban="Beragam bergantung kompleksitas. Biasanya untuk proyek sederhana biasanya 1 - 3 hari." />
					</Card>

					<Card>
						<Faq pertanyaan="Apakah bisa di-refund?" jawaban="Proyek yang sudah dispakati (DP sudah ditransfer) tidak dapat direfund." />
					</Card>

					<Card>
						<Faq pertanyaan="Apakah ada jatah refisi?" jawaban="ada, maksimal 20x revisi." />
					</Card>
				</div>
			</div>

			<Footer />
		</>
	)
}

export default App
