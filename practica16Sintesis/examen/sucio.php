<xs:attribute name="nacionalidad" use="required">
    <xs:simpleType>
        <xs:restriction base="xs:string">
            <xs:enumeration value="francesa"/>
            <xs:enumeration value="eterniana"/>
            <xs:enumeration value="italiana"/>
            <xs:enumeration value="marciana"/>
        </xs:restriction>
    </xs:simpleType>
</xs:attribute>


<!ELEMENT estadisticas (golpes)+>
<!ATTLIST estadisticas
  xmlns CDATA #FIXED ''>

<!ELEMENT golpes EMPTY>
<!ATTLIST golpes
  xmlns CDATA #FIXED ''
  dados CDATA #IMPLIED
  recibidos CDATA #IMPLIED>


<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema" elementFormDefault="qualified">
  <xs:element name="estadisticas">
    <xs:complexType>
      <xs:sequence>
        <xs:element maxOccurs="unbounded" ref="golpes"/>
      </xs:sequence>
    </xs:complexType>
  </xs:element>
  <xs:element name="golpes">
    <xs:complexType>
      <xs:attribute name="dados" type="xs:integer"/>
      <xs:attribute name="recibidos" type="xs:integer"/>
    </xs:complexType>
  </xs:element>
</xs:schema>
