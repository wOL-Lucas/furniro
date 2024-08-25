--
-- PostgreSQL database dump
--

-- Dumped from database version 13.16 (Debian 13.16-1.pgdg120+1)
-- Dumped by pg_dump version 13.16 (Debian 13.16-1.pgdg120+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: product; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.product (
    id integer NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE public.product OWNER TO root;

--
-- Name: product_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public.product_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.product_id_seq OWNER TO root;

--
-- Name: product_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public.product_id_seq OWNED BY public.product.id;


--
-- Name: sku; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.sku (
    id integer NOT NULL,
    code character varying NOT NULL,
    size character varying NOT NULL,
    color character varying NOT NULL,
    description character varying NOT NULL,
    "productId" integer,
    stock integer NOT NULL,
    image character varying NOT NULL,
    price numeric(10,2) NOT NULL,
    "discountPercentage" integer,
    "isNewProduct" boolean
);


ALTER TABLE public.sku OWNER TO root;

--
-- Name: sku_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public.sku_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.sku_id_seq OWNER TO root;

--
-- Name: sku_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public.sku_id_seq OWNED BY public.sku.id;


--
-- Name: user_address; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.user_address (
    id integer NOT NULL,
    "zipCode" character varying NOT NULL,
    country character varying,
    street character varying,
    city character varying,
    province character varying,
    addon character varying,
    "userId" integer
);


ALTER TABLE public.user_address OWNER TO root;

--
-- Name: user_address_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public.user_address_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_address_id_seq OWNER TO root;

--
-- Name: user_address_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public.user_address_id_seq OWNED BY public.user_address.id;


--
-- Name: user_details; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.user_details (
    id integer NOT NULL,
    "firstName" character varying NOT NULL,
    "lastName" character varying NOT NULL,
    "companyName" character varying NOT NULL,
    "userId" integer
);


ALTER TABLE public.user_details OWNER TO root;

--
-- Name: user_details_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public.user_details_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_details_id_seq OWNER TO root;

--
-- Name: user_details_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public.user_details_id_seq OWNED BY public.user_details.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.users (
    id integer NOT NULL,
    email character varying NOT NULL,
    password character varying NOT NULL,
    "detailsId" integer,
    "addressId" integer
);


ALTER TABLE public.users OWNER TO root;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO root;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: product id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.product ALTER COLUMN id SET DEFAULT nextval('public.product_id_seq'::regclass);


--
-- Name: sku id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.sku ALTER COLUMN id SET DEFAULT nextval('public.sku_id_seq'::regclass);


--
-- Name: user_address id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.user_address ALTER COLUMN id SET DEFAULT nextval('public.user_address_id_seq'::regclass);


--
-- Name: user_details id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.user_details ALTER COLUMN id SET DEFAULT nextval('public.user_details_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: product; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public.product (id, name) FROM stdin;
2	Asgaard
3	Syltherine
4	Casaliving Wood
6	Respira
7	Lolito
8	Leviosa
9	Inner Peace
10	Samantha
11	Griffo
12	Muggo
13	Pingky
14	Sidney
15	Wild Maxi
16	Peach Sofa
\.


--
-- Data for Name: sku; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public.sku (id, code, size, color, description, "productId", stock, image, price, "discountPercentage", "isNewProduct") FROM stdin;
1	SS001	L	Blue	Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well balanced audio which boasts a clear midrange and extended highs for a sound	2	1000	https://furniro-s3.s3.us-east-2.amazonaws.com/asgaard.png	250000.00	\N	\N
2	SS002	L	Black	Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well balanced audio which boasts a clear midrange and extended highs for a sound	2	1250	https://furniro-s3.s3.us-east-2.amazonaws.com/asgaard.png	250000.00	\N	\N
3	SS003	L	Blue	Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well balanced audio which boasts a clear midrange and extended highs for a sound	2	1000	https://furniro-s3.s3.us-east-2.amazonaws.com/asgaard.png	250000.00	\N	\N
5	CL001	S	Grey	Cool sofa	4	100	https://furniro-s3.s3.us-east-2.amazonaws.com/casaliving.png	270000.00	\N	\N
8	LV001	L	White	Stylish cafe chair	8	100	https://furniro-s3.s3.us-east-2.amazonaws.com/Leviosa.png	2500000.00	\N	\N
4	ST001	L	white	Stylish cafe chair	3	150	https://furniro-s3.s3.us-east-2.amazonaws.com/Syltherine.png	2500000.00	30	\N
7	LT001	L	White	Outdoor bar table and stool	7	100	https://furniro-s3.s3.us-east-2.amazonaws.com/Lolito.png	7000000.00	50	\N
6	RS001	S	Brown	Outdoor bar table and stool	6	100	https://furniro-s3.s3.us-east-2.amazonaws.com/respira.png	500000.00	\N	t
9	IP001	S	White	Posters collection	9	25	https://furniro-s3.s3.us-east-2.amazonaws.com/inner-peace.png	500000.00	\N	t
10	SM001	M	Brown	Vintage wood chair	10	25	https://furniro-s3.s3.us-east-2.amazonaws.com/samantha.png	2500000.00	\N	t
11	GF001	S	White	Modern lampshade	11	10	https://furniro-s3.s3.us-east-2.amazonaws.com/griffo.png	200000.00	\N	f
12	MG001	S	Gray	Modern sofa	12	10	https://furniro-s3.s3.us-east-2.amazonaws.com/muggo.png	2250000.00	\N	t
13	PG001	L	Gray	Modern stylish sofa	13	10	https://furniro-s3.s3.us-east-2.amazonaws.com/pingky.png	2230000.00	\N	t
14	SD001	L	Brown	Vintage leather sofa	14	10	https://furniro-s3.s3.us-east-2.amazonaws.com/sidney.png	5000000.00	\N	f
16	PS001	L	Yellow	Modern, peach shapped sofa	16	5	https://furniro-s3.s3.us-east-2.amazonaws.com/peachsofa.png	25000000.00	\N	f
15	WM001	L	Gray	Modern stylish sofa	15	10	https://furniro-s3.s3.us-east-2.amazonaws.com/wildmaxi.png	15000000.00	\N	t
\.


--
-- Data for Name: user_address; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public.user_address (id, "zipCode", country, street, city, province, addon, "userId") FROM stdin;
\.


--
-- Data for Name: user_details; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public.user_details (id, "firstName", "lastName", "companyName", "userId") FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public.users (id, email, password, "detailsId", "addressId") FROM stdin;
\.


--
-- Name: product_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public.product_id_seq', 16, true);


--
-- Name: sku_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public.sku_id_seq', 16, true);


--
-- Name: user_address_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public.user_address_id_seq', 1, false);


--
-- Name: user_details_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public.user_details_id_seq', 1, false);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public.users_id_seq', 1, false);


--
-- Name: user_address PK_302d96673413455481d5ff4022a; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.user_address
    ADD CONSTRAINT "PK_302d96673413455481d5ff4022a" PRIMARY KEY (id);


--
-- Name: users PK_a3ffb1c0c8416b9fc6f907b7433; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY (id);


--
-- Name: product PK_bebc9158e480b949565b4dc7a82; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY (id);


--
-- Name: sku PK_ed102ac07c2cbc14c9a1438ecc2; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.sku
    ADD CONSTRAINT "PK_ed102ac07c2cbc14c9a1438ecc2" PRIMARY KEY (id);


--
-- Name: user_details PK_fb08394d3f499b9e441cab9ca51; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.user_details
    ADD CONSTRAINT "PK_fb08394d3f499b9e441cab9ca51" PRIMARY KEY (id);


--
-- Name: user_address REL_1abd8badc4a127b0f357d9ecbc; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.user_address
    ADD CONSTRAINT "REL_1abd8badc4a127b0f357d9ecbc" UNIQUE ("userId");


--
-- Name: user_details REL_5261d2468b1288b347d58e8b54; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.user_details
    ADD CONSTRAINT "REL_5261d2468b1288b347d58e8b54" UNIQUE ("userId");


--
-- Name: users REL_a8687924ae4d52f05db87f3352; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT "REL_a8687924ae4d52f05db87f3352" UNIQUE ("detailsId");


--
-- Name: users REL_bafb08f60d7857f4670c172a6e; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT "REL_bafb08f60d7857f4670c172a6e" UNIQUE ("addressId");


--
-- Name: user_address FK_1abd8badc4a127b0f357d9ecbc2; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.user_address
    ADD CONSTRAINT "FK_1abd8badc4a127b0f357d9ecbc2" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: user_details FK_5261d2468b1288b347d58e8b540; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.user_details
    ADD CONSTRAINT "FK_5261d2468b1288b347d58e8b540" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: users FK_a8687924ae4d52f05db87f3352f; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT "FK_a8687924ae4d52f05db87f3352f" FOREIGN KEY ("detailsId") REFERENCES public.user_details(id);


--
-- Name: sku FK_b45cf051ab6f88a0db957e5a397; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.sku
    ADD CONSTRAINT "FK_b45cf051ab6f88a0db957e5a397" FOREIGN KEY ("productId") REFERENCES public.product(id);


--
-- Name: users FK_bafb08f60d7857f4670c172a6ea; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT "FK_bafb08f60d7857f4670c172a6ea" FOREIGN KEY ("addressId") REFERENCES public.user_address(id);


--
-- PostgreSQL database dump complete
--

